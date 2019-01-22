import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController, LoadingController  } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { UtilsProvider } from '../../providers/utils/utils';


@IonicPage()
@Component({
  selector:    'page-activity-journal',
  templateUrl: 'activity-journal.html',
})
export class ActivityJournalPage {

  activity:             any    = {};
  userActivity:         any    = {};
  userActivityJournal:  any    = {};
  error:                string = '';

  constructor(
      public api:         ApiProvider,
      public navCtrl:     NavController,
      public navParams:   NavParams,
      public toastCtrl:   ToastController,
      public loadingCtrl: LoadingController,
      public utils:       UtilsProvider,
  ){}

  getData( userActivityId: number ): void {
    this.api.getUserActivityJournal( userActivityId ).subscribe( data => {
      this.userActivityJournal = data;
    });
  }

  ionViewDidEnter(): void {
    this.activity     = this.navParams.get( 'activity' );
    this.userActivity = this.navParams.get( 'userActivity' );
    this.getData( this.userActivity.id );
  }

  saveJournal(){
    const loader = this.utils.loading( 'Saving journal...' );
    const data   = this.userActivityJournal.text;
    this.api.postUserActivityJournal( this.userActivity.id, { data } )
      .subscribe( response => {
        loader.dismiss();
      });
  }

}
