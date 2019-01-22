import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-leaderboard',
  templateUrl: 'leaderboard.html',
})
export class LeaderboardPage {

  constructor(
    public api:       ApiProvider,
    public navCtrl:   NavController,
    public navParams: NavParams,
  ) { }

  ionViewDidEnter(){
    if ( !this.api.user.userId ){
      this.navCtrl.setRoot( 'LoginPage' );
      return;
    }
  }

}
