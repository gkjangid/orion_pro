import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-network',
  templateUrl: 'network.html',
})
export class NetworkPage {

  groups: any[] = [];

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
    this.api.getMyGroups().subscribe( data => {
      this.groups = data
      .map( item => {
        return item.name.split( '-' ).slice( 1 ).join( '-' );
      })
      .filter( item => !!item );
    });
  }

}
