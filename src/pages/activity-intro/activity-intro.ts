import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController, Events, Platform }   from 'ionic-angular';
import { ApiProvider }  from '../../providers/api/api';


@IonicPage()
@Component({
  selector:    'page-activity-intro',
  templateUrl: 'activity-intro.html',
})
export class ActivityIntroPage {

  activity:         any    = {};
  activityId:       number;
  appFeatures:      { [name: string] : boolean } = {};
  lastQuestion:     number = -1;
  progress:         number = 0;
  segment:          string = 'info';
  userActivity:     any    = {};

  constructor(
    public alertCtrl: AlertController,
    public api:       ApiProvider,
    public events:    Events,
    public navCtrl:   NavController,
    public navParams: NavParams,
    public platform:  Platform,
  ) {
    this.events.subscribe( 'lastQuestion', lastQuestion => {
      this.lastQuestion = lastQuestion;
      this.progress     = this.getProgress();
      if ( lastQuestion == this.activity.questions.length-1 ){
        this.segment='info';
      }
    });
  }

  activityJournal(): void {
    this.navCtrl.push( 'ActivityJournalPage', {
      activity:     this.activity,
      userActivity: this.userActivity,
    })
  }

  begin(): void {
    this.segment='questions';
    this.gotoQuestion( this.lastQuestion + 1, this.activity );
    this.api.setUserActivityStateStarted( this.activity );
  }

  canBegin(): boolean {
    if ( !this.userActivity.start_date ){ return true; }
    const startDate = new Date( this.userActivity.start_date );
    return new Date() >= startDate;
  }

  chat(): void {
    this.navCtrl.push( 'ChatPage', { userActivity: this.userActivity } );
  }

  deleteActivity(): void {
    this.alertCtrl.create({
      title: 'Confirm deletion',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.api.deleteUserActivity( this.userActivity.id )
              .subscribe( response => {
                this.removeUserActivity( this.userActivity.activity_id );
                this.navCtrl.pop();
              });
          },
        },
      ],
    }).present();
  }

  editTeam(): void {
    this.alertCtrl.create({
      subTitle: this.userActivity.team? 'Change team': 'Join team',
      inputs: [
        {
          name: 'team',
          placeholder: 'Team name',
          value: this.userActivity.team,
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cance;',
        },
        {
          text: 'OK',
          handler: data => {
            const team = data.team.trim();
            this.userActivity.team = team;
            this.api.setUserActivityTeam( this.userActivity ).subscribe( response => {
              this.userActivity.team = response.data;
            });
          },
        },
      ],
    }).present();
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

  getProgress(): number {
    if ( this.lastQuestion < 0 ){ return 0; }
    return Math.round(
      ( this.lastQuestion + 1 ) / this.activity.questions.length * 100
    );
  }

  getUserActivity( activityId: number ): void {
    this.api.getUserActivities( activityId )
      .subscribe( data => {
        this.userActivity = data;
        this.activity     = this.userActivity.activity.data;
        this.lastQuestion = this.userActivity.completed_question;
        this.progress     = this.getProgress();
      });
  }

  gotoQuestion( questionIdx: number, activity: any ): void {
    if ( !this.canBegin() ){ return; }
    if ( questionIdx > this.lastQuestion + 1 ) { return; }
    this.navCtrl.push( 'ActivityAnswerPage', {
      questionIdx:  questionIdx,
      activity:     activity,
      lastQuestion: this.lastQuestion,
      userActivity: this.userActivity,
      appFeatures:  this.appFeatures,
    });
  }

  ionViewDidEnter(){
    if ( !this.api.user.userId ){
      this.navCtrl.push( 'LoginPage' );
      return;
    }
    this.activityId = this.navParams.get( 'id' );
    if ( !this.activityId ) {
      this.navCtrl.setRoot( 'HomePage' );
      return;
    }
    this.getAppFeatures();
    this.getUserActivity( this.activityId );
  }

  ionViewDidLeave(): void {
    let videos = Array.from( document.querySelectorAll( 'video' ) );
    videos.map( item => { item.pause() });
  }

  removeUserActivity( activityId: number ): void {
    this.api.userActivities = this.api.userActivities
      .filter( item => item.pk != activityId );
  }

}
