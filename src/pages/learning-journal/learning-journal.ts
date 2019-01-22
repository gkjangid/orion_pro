import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController, LoadingController  } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Activity, Question as ActivityQuestion } from '../../models';
import { UtilsProvider } from '../../providers/utils/utils';


class LearningJournal implements Partial<ILearningJournal> {
  id:           number = null;
  title:        string = '';
  text:         string = '';
  questions:    ILearningJournalQuestion[] = [];
}

class LearningJournalQuestion implements ILearningJournalQuestion {
  text: string;
}

@IonicPage()
@Component({
  selector:    'page-learning-journal',
  templateUrl: 'learning-journal.html',
})
export class LearningJournalPage {

  appFeatures:  { [name: string] : boolean } = {};
  data:         ILearningJournal = {} as any;
  error:        string           = '';
  segment:      string           = 'notes';

  constructor(
      public api:         ApiProvider,
      public navCtrl:     NavController,
      public navParams:   NavParams,
      public toastCtrl:   ToastController,
      public loadingCtrl: LoadingController,
      public utils:       UtilsProvider,
  ){}

  addQuestion(): void {
    try {
      if (
        this.data.questions.length
        && !this.data.questions [this.data.questions.length - 1].text.trim()
      ){ return; }
    } catch( e ){ return; }

    this.data.questions.push( new LearningJournalQuestion() );
  }

  createActivity(): void {
    const activity = this.newActivity( this.data );
    const data     = JSON.stringify( activity );
    if ( !this.data.id ){
      throw( 'Invalid Learning Journal ID' );
    }
    const loading = this.utils.loading( 'Creating Activity...' );
    this.api.postLearningJournalActivity( this.data.id, { data } ).subscribe( response => {
      loading.dismiss();
      this.api.refreshData();

      const options = { buttons: [{
        text: 'Close',
        role: 'cancel',
        handler: () => {
          setTimeout( () => this.navCtrl.pop(), 500 );
        }
      }]};
      const alert = this.utils.alert( `Activity ${ response.data.title } created`, options, false );
      setTimeout( () => alert.present(), 500 );
    });
  }

  featureEnabled( name: string ): boolean {
    const feature = this.appFeatures [name];
    if ( feature === undefined ){
      return true;
    }
    return feature;
  }

  getAppFeatures(): void {
    this.api.getAppFeature().subscribe( response => {
      response.data.map( item => {
        this.appFeatures [item.name] = item.enabled;
      });
    });
  }

  ionViewDidEnter(): void {
    this.data = this.navParams.get( 'learningJournal' ) || new LearningJournal();
    this.getAppFeatures();
    setTimeout( this.resizeAllTextareas );
  }

  newActivity( data: ILearningJournal ): Activity {
    const activity            = new Activity();
    activity.title            = data.title;
    activity.briefDescription = 'Please complete the following questions';
    activity.description      = data.title;
    activity.status           = 'Published';
    activity.username         = this.api.user.userName;

    data.questions.map( ( item, index ) => {
      const question = new ActivityQuestion();
      question.question       = item.text;
      question.questionOrder  = ( index + 1 ) * 10;
      question.questionType   = 'noAutoCorrection';
      activity.questions.push( question );
    });

    return activity;
  }

  resizeAllTextareas(): void {
    let element: any;
    for ( element of Array.from( document.querySelectorAll( '.question textarea' ) ) ){
      if ( element.scrollHeight ){
          element.style.height = `${element.scrollHeight}px`;
      }
    }
  }

  resizeTextarea( index?: number ): void {
    if ( !index ){
      return this.resizeAllTextareas();
    }

    const elements = Array.from( document.querySelectorAll( '.question textarea' ) );
    let element: any = elements [index];
    element.style.height = `${element.scrollHeight}px`;
  }

  saveJournal(){
    const loader = this.utils.loading( 'Saving journal...' );
    const data = JSON.stringify( this.data );
    this.api.postLearningJournal( this.data.id, { data } ).subscribe( response => {
      loader.dismiss();
      this.data.id = response.data.id;
    });
  }

}
