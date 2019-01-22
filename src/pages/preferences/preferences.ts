import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html',
})
export class PreferencesPage {

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
