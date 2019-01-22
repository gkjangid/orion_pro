import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector:    'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

  currentPassword:  string;
  error:            string = ''
  hideBackButton:   boolean;
  newPassword1:     string;
  newPassword2:     string;

  constructor(
    public api:       ApiProvider,
    public navCtrl:   NavController,
    public navParams: NavParams,
  ){}

  changePassword(){
    if ( this.newPassword1.length < 8 ){
      this.error = 'Password length must be at least 8 characters';
      return;
    }
    if ( this.newPassword1 != this.newPassword2 ){
      this.error = 'Passwords do not match';
      return;
    }
    this.error = '';
    this.api.postChangePassword({
      currentPassword:  this.currentPassword,
      newPassword:      this.newPassword1,
    }).subscribe( response => {
      this.error = response.error;
      if ( !response.error ){
        this.navCtrl.pop();
      }
    });
  }

  checkPassword(): void {
    if ( this.newPassword1 != this.newPassword2 ){
      this.error = 'Passwords do not match';
    } else {
      this.error = '';
    }
  }

  ionViewDidEnter(): void {
    this.hideBackButton = this.navParams.get( 'hideBackButton' );
  }

}
