import { Component, ViewChild } from '@angular/core';
import { DomSanitizer }         from '@angular/platform-browser';

import { IonicPage, NavController, Navbar, NavParams }        from 'ionic-angular';
import { AlertController, Events, ModalController, Platform } from 'ionic-angular';

import { ApiProvider }                  from '../../providers/api/api';
import { ValidateAnswer, Status }       from '../../providers/utils/utils';
import { AnswerFeedbackModalComponent } from './answer-feedback-modal/answer-feedback-modal';


@IonicPage()
@Component({
  selector:    'page-activity-answer',
  templateUrl: 'activity-answer.html',
})
export class ActivityAnswerPage {

  @ViewChild( Navbar ) navBar: Navbar;

  activity:       any;
  appFeatures:    { [name: string] : boolean } = {};
  lastQuestion:   number;
  objectUrl:      string;
  photo:          any     = null;
  photoChanged:   boolean = false;
  question:       any     = {};
  questionIdx:    number  = null;
  scores:         any     = {}
  spinner:        boolean = false;
  thumbnail:      any;
  time:           string  = '';
  userActivity:   any     = {};

  constructor(
    public alertCtrl:     AlertController,
    public api:           ApiProvider,
    public domSanitizer:  DomSanitizer,
    public events:        Events,
    public modalCtrl:     ModalController,
    public navCtrl:       NavController,
    public navParams:     NavParams,
    public platform:      Platform,
  ) { }

  activityJournal(): void {
    this.navCtrl.push( 'ActivityJournalPage', {
      activity:     this.activity,
      userActivity: this.userActivity,
    })
  }

  activityCompleted(): void {
    this.api.setUserActivityStateCompleted( this.activity );
    this.createAlert(
      this.getCompletionMessage(),
      this.gotoActivityIntroPage.bind( this ),
    ).present();
  }

  answerChanged( answer: any ): void {
    if ( answer.objectUrl ){
      this.objectUrl = answer.objectUrl;
      this.photo     = answer.file;
      answer         = answer.filename;
    }
    let status = new ValidateAnswer( this.activity, this.question, this.userActivity, answer ).status;
    this.userActivityAction( 'completed', this.userActivity, this.questionIdx, answer, this.photo, status );
  }

  changeQuestion( offset: number ): any {
    const index = this.questionIdx + offset;
    if ( index < 0 || index > this.activity.questions.length-1 ) {
      return;
    }
    this.navCtrl.push(
      'ActivityAnswerPage',
      {
        questionIdx:  index,
        activity:     this.activity,
        lastQuestion: this.lastQuestion,
        userActivity: this.userActivity,
        appFeatures:  this.appFeatures,
      },
      {
        animate:   true,
        animation: 'ios-transition',
        duration:  350,
        direction: offset > 0 ? 'forward' : 'back',
      }
    );
  }

  chat(): void {
    this.navCtrl.push( 'ChatPage', { userActivity: this.userActivity } );
  }

  createAlert( message: string, okHandler?: Function, options?: any ): any {
    options = {
      message:  message,
      buttons: [
        {
          text:     'OK',
          handler:  () => {
            if ( okHandler ){ okHandler() };
          },
        },
      ],
      enableBackdropDismiss: false,
      ...options,
    };
    return this.alertCtrl.create( options );
  }

  createModal({ component, componentParams, modalOptions, onDidDismiss }): any {
    let options = {
      enableBackdropDismiss: false,
      ...modalOptions,
    }
    let modal = this.modalCtrl.create( component, componentParams, options );
    modal.onDidDismiss( onDidDismiss );
    return modal;
  }

  createModalAnswerFeedback( answer: any, status: Status ): any {
    return this.createModal({
      component: AnswerFeedbackModalComponent,
      componentParams: {
        activity:     this.activity,
        question:     this.question,
        userActivity: this.userActivity,
        answer:       answer,
        status:       status,
      },
      modalOptions: {
        enableBackdropDismiss: false,
      },
      onDidDismiss: response => {
        if ( response == 'next' ){
          this.nextStep();
        }
      },
    });
  }

  featureEnabled( name: string ): boolean {
    const feature = this.appFeatures [name];
    if ( feature === undefined ){
      return true;
    }
    return feature;
  }

  getCompletionMessage(): string {
    let checker, msg = '';
    msg += 'Congratulations! You have completed this activity. ';
    const scores = this.getScores();
    if ( scores != 'N/A' ){
      msg += `Your temporary score is ${scores}. `;
    }
    let needsChecker = this.activity.questions
    .some( item => {
      return item.needsChecker && item.questionType == 'noAutoCorrection'
    });
    if ( needsChecker ){
      if( this.activity.needsCoach ){
        checker = this.activity.coach;
      } else {
        checker = this.activity.checker;
      }
      msg = msg += `<p>A notification will be sent to ${checker} who will assign additional scores.`;
    }
    return msg;
  }

  getResponseAnswer( response: any ): any {
    if ( this.question.questionType == 'table' ){
      const tableAnswer = response.data.answer;
      if ( tableAnswer instanceof Array ){
        return tableAnswer;
      } else {
        return [];
      }
    } else {
      return response.data.answer;
    }
  }

  getScores(): string {
    const scores = this.scores.questions;
    if ( !scores ){
      return 'N/A';
    }
    let totalScore: any[] = [ 0, 0 ];
    let questions = this.activity.questions;
    Object.keys( scores ).map( ( key, idx ) => {
      let [ score, maxScore ] = scores [key];
      if ( questions [idx].needsChecker ){
        if ( score === 0 ){ return; }
      }
      totalScore [0] += score;
      totalScore [1] += maxScore;
    });

    let score = totalScore.join( '/' );
    let pct   = Math.round( 100 * totalScore [0] / totalScore [1] );
    return `${score} (${pct}%)`;
  }

  goPrev(): void {
    this.changeQuestion( -1 );
  }

  goNext(): void {
    this.changeQuestion( 1 );
  }

  gotoActivityIntroPage(): void {
    this.navCtrl.popToRoot({ animate: false });
    this.navCtrl.push(
      'ActivityIntroPage',
      { id: this.activity.id },
      { animate: true },
    );
  }

  ionViewDidEnter(){
    if ( !this.api.user.userId ){
      this.navCtrl.setRoot( 'HomePage' );
      return;
    }
    this.questionIdx  = this.navParams.get( 'questionIdx' );
    this.activity     = this.navParams.get( 'activity' );
    this.appFeatures  = this.navParams.get( 'appFeatures' );
    this.lastQuestion = this.navParams.get( 'lastQuestion' );
    this.userActivity = this.navParams.get( 'userActivity' );
    if ( this.questionIdx === undefined || !this.activity ){
      this.navCtrl.pop().catch( () => {
        this.navCtrl.setRoot( 'HomePage' );
      });
      return;
    }
    this.question = this.activity.questions[ this.questionIdx ];
    this.time     = new Date().valueOf().toString();
    this.userActivityAction( 'started', this.userActivity, this.questionIdx );
    this.navBar.backButtonClick = event => {
      this.gotoActivityIntroPage();
    };
  }

  ionViewDidLeave(): void {
    let videos = Array.from( document.querySelectorAll( 'video' ) );
    videos.map( item => { item.pause() });
  }

  isPhotoUpload(): boolean {
    const notPhotoUploadTypes = [ 'upload', 'action' ];
    return this.question.photoUpload
      && notPhotoUploadTypes.indexOf( this.question.questionType ) == -1;
  }

  nextStep(): void {
    if ( this.questionIdx == this.lastQuestion + 1 ){
      this.lastQuestion += 1;
      this.events.publish( 'lastQuestion', this.lastQuestion );
    }

    if ( this.questionIdx == this.activity.questions.length - 1 ){
      this.activityCompleted();
      return;
    }
    this.changeQuestion( 1 );
    this.spinner = true;
    setTimeout( () => {
      this.spinner = false;
    }, 500 );
  }

  photoChange( event: any ): void {
    this.objectUrl  = event.objectUrl;
    this.photo      = event.file;
    if ( this.objectUrl ) {
      this.thumbnail    = this.domSanitizer.bypassSecurityTrustResourceUrl( this.objectUrl );
      this.photoChanged = true;
    } else {
      this.thumbnail    = null;
      this.photoChanged = false;
    }
  }

  userActivityAction(
    action:       string,
    userActivity: any,
    questionIdx:  number,
    answer:       any    = '',
    photo:        any    = null,
    status:       Status = null,
  ): void {
    let isCorrect = (status === null)? null : status.isCorrect;
    this.api.userActivityAction( this.activity.id, {
      action:     action,
      question:   questionIdx,
      answer:     JSON.stringify( answer ),
      upload:     photo,
      isCorrect:  isCorrect,
    })
      .subscribe( response => {
        this.scores = response.scores;
        if ( answer ){
          userActivity.answers [this.questionIdx] = this.getResponseAnswer( response );
        }
        window.URL.revokeObjectURL( this.objectUrl );
        if (action == 'completed' ){
          this.userActivityActionCompleted( response, userActivity, answer, status );
        }
      });
  }

  userActivityActionCompleted( response: any, userActivity: any, answer:any, status: Status ): void {
    if ( this.question.questionType == 'upload'
      || this.question.questionType == 'action'
    ){
      this.nextStep();
      return;
    }

    if ( this.question.questionType == 'noAutoCorrection' ){
      if ( !this.question.needsChecker ){
        this.nextStep();
        return;
      } else {
        this.createAlert(
          'Your answer will be sent for correction.',
          this.nextStep.bind( this ),
        ).present();
        return;
      }
    }

    let modal = this.createModalAnswerFeedback( answer, status );
    modal.present();
  }

}
