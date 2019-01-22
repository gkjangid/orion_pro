import { Component }          from '@angular/core';
import { Http }               from '@angular/http';
import { Observable }         from 'rxjs';
import { SettingsProvider }   from '../../providers/settings/settings';
import { IonicPage, Events, NavController, NavParams }  from 'ionic-angular';


@IonicPage()
@Component({
  selector:    'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  readonly groups: string[] = [

  ];

  errorMsg:       string;
  eventDelay:     number  = 1000;
  homePage:       string  = 'HomePage';
  httpOptions:    object  = { withCredentials: true };
  loginExpiry:    number  = 1000*60*60*24; // 1 day
  showLogin:      boolean = false;
  showRegister:   boolean = true;
  password:       string;
  username:       string;

  constructor(
    private events:       Events,
    private http:         Http,
    private navCtrl:      NavController,
    private navParams:    NavParams,
    private settings:     SettingsProvider,
  ) { }

  chkAccess( user: any ): boolean {

    if ( user.groups ){
      if ( this.groups.length == 0 ){  return true; }
      for ( let group of user.groups ){
        if ( this.groups.indexOf( group ) != -1 ){
          return true;
        }
      }
    }
    return false;
  }

  gotoNextPage(): void {
    const next = this.navParams.get( 'next' );
    if ( next ){
      const params = this.navParams.get( 'params' ) ||  {};
      this.navCtrl.setRoot( next, params );
      return;
    }
    if ( this.navCtrl.canGoBack() && this.settings.user.userId ){
      this.navCtrl.pop().catch( err => {
        console.error( this.navCtrl.getViews() );
        this.navCtrl.setRoot( this.homePage );
      });
      return;
    }
    this.navCtrl.setRoot( this.homePage );
  }

  ionViewDidEnter() {
    const user   = this.settings.getSession( 'user' ) || {};
    const now    = new Date().valueOf();

    if ( user && !this.chkAccess( user ) ){
      this.settings.clearUser();
      this.showLogin = true;
      return;
    }

    if ( user.userId && now - user.lastLogin < this.loginExpiry ){
      Object.assign( this.settings.user, user );
      this.publishEvent( this.settings.user );
      this.gotoNextPage();
      return;
    }
    this.settings.clearUser();
    this.showLogin = true;
  }

  login(): void {
    this.loginApi( this.username, this.password )
      .subscribe(
        data => {
          this.errorMsg = '';
          if ( data.change_password ){
            this.navCtrl.push( 'ChangePasswordPage', { hideBackButton: true } );
            return;
          }
          this.gotoNextPage();
        },
        error => {
          this.errorMsg = `${ error.message || "Login Error!" }`;
          console.log( error );
        },
    );
  }

  loginApi( username: string, password: string ): Observable<any> {
    const url  = '/api/login/';
    const data = {
      username: username,
      password: password,
    };
    return this.post( url, data, {} )
      .map( data => {
        if ( !this.chkAccess( data ) ){
          throw new Error( 'Access Denied' );
        }
        if ( !data.email ){
          throw new Error( 'Access Denied.  Invalid email.' );
        }
        if ( data.change_password ){
          this.settings.clearUser();
          return data;
        }
        Object.assign( this.settings.user, data );
        this.settings.user.lastLogin = new Date().valueOf();
        this.settings.saveSession( 'user', this.settings.user );
        this.publishEvent( this.settings.user );
        return data;
      });
  }

  post( url: string, data: any, options?: object ): Observable<any> {
    let postData = new FormData();
    for ( let key in data ){
      postData.append( key, data[ key ] );
    }
    return this.http.post( url, postData, options || this.httpOptions )
      .map( response => {
        return response.json()
      });
  }

  publishEvent( user ): void {
    setTimeout( () => {
      this.events.publish( 'login', user )
    }, this.eventDelay );
  }

}
