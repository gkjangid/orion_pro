import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector:    'page-api-test',
  templateUrl: 'api-test.html',
})
export class ApiTestPage {

  readonly names = [ 'apiName', 'method', 'rid', 'srid', 'payload' ];

  apiName:  string;
  method:   string;
  rid:      number;
  srid:     number;
  payload:  string;
  response: string;

  constructor(
    public api:       ApiProvider,
    public navCtrl:   NavController,
    public navParams: NavParams,
  ){}

  ionViewDidEnter(): void {
    this.names.map( item => {
      this [item ] = window.sessionStorage.getItem( item );
    });
  }

  submit(){
    this.names.map( item => {
      window.sessionStorage.setItem( item, this [item] || '' );
    });
    this.response = '';

    let resource = this.apiName;
    if ( this.rid ){
      resource = `${resource}/${this.rid}/`;

      if ( this.srid ){
        resource = `${resource}${this.srid}/`;
      }
    }
    const url = this.api.getUrl( resource )

    switch ( this.method ){

      case 'get':
        this.api.get( url ).subscribe( response => {
          this.response = response;
          console.log( this.response )
        });
        break;

      case 'post':
        const payload = JSON.parse( this.payload );
        this.api.post( url, payload, null, false ).subscribe( response => {
          this.response = response;
          console.log( this.response )
        });
        break;
    }
  }

}
