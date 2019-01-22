import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams }  from 'ionic-angular';
import { ApiProvider }                          from '../../providers/api/api';
import { SettingsProvider }                     from '../../providers/settings/settings';

@IonicPage()
@Component({
  selector:    'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  feedback:    string;
  showSpinner: boolean;

  constructor(
    public api:       ApiProvider,
    public navCtrl:   NavController,
    public navParams: NavParams,
    public settings:  SettingsProvider,
  ){}

  ionViewDidEnter(): void {
    if ( !this.settings.user.userId ){
      this.navCtrl.push( 'LoginPage' );
      return;
    }
  }

  submit(): void {
    if ( !this.feedback ){ return; }
    this.showSpinner = true;
    this.api.postFeedback({ feedback: this.feedback }).subscribe( response => {
      this.showSpinner = false;
      this.api.toastCtrl.create({
        message: 'Thank you for your feedback',
        duration: 3000,
        position: 'middle',
      }).present();
      this.navCtrl.pop();
    })
  }

}
