import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector:    'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  firstName:   string  = '';
  lastName:    string  = '';
  email:       string  = '';
  error:       string  = '';
  showSpinner: boolean = false;

  constructor(
    public api:     ApiProvider,
    public navCtrl: NavController,
  ){}

  cannotRegister(): boolean {
    return (
         !this.firstName
      || !this.lastName
      || !this.email
      || this.showSpinner
    );
  }

  register(): void {
    this.showSpinner = true;
    this.error = '';
    this.api.postRegister({
      firstName: this.firstName,
      lastName:  this.lastName,
      email:     this.email,
    }).subscribe( response => {
      this.showSpinner = false;
      if ( response.error ){
        this.error = response.error;
      } else {
        this.api.utils.alertCtrl.create({
          subTitle: 'An email has been sent to you with your login password.',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                this.navCtrl.pop();
              }
            },
          ],
        }).present();

      }
    });
  }

}
