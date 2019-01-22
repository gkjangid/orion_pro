import { Injectable }       from '@angular/core';
import { AlertController, LoadingController, ToastController } from 'ionic-angular';

export { ValidateAnswer }   from './answer-validation/answer-validation';
export { Status }           from './answer-validation/answer-validation-base';



@Injectable()
export class UtilsProvider {

  constructor (
    public alertCtrl:   AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl:   ToastController,
  ) { }

  alert( message: string, options: any = {}, present: boolean = true ): any {
    options = {
      message,
      buttons: [ { text: 'Close', role:'cancel' } ],
      ...options,
    };
    const handle = this.alertCtrl.create( options );
    if ( present ){ handle.present(); }
    return handle;
  }

  canAccessPage( groups: any, user: any ): boolean {
    if ( groups == '*' ){ return true; }
    if ( !user.userId || !user.groups || !groups ){ return false; }
    if ( groups.constructor !== Array ){
      groups = [groups];
    }
    for ( let group of user.groups ){
      if ( groups.indexOf( group ) != -1 ){
        return true;
      }
    }
    return false;
  }

  loading( message: string, options: any = {}, present: boolean = true ): any {
    options = {
      content: message,
      ...options,
    };
    const handle = this.loadingCtrl.create( options );
    if ( present ){ handle.present(); }
    return handle;
  }

  shuffleArray( arr: any[] ): any[] {
    let newArr = arr.slice();
    for ( let i = newArr.length - 1; i > 0; i-- ) {
        let rand = Math.floor( Math.random() * (i + 1) );
        [ newArr[i], newArr[rand] ]=[ newArr[rand], newArr[i] ];
    }
    return newArr;
  }

  toast( message: string, options: any = {}, present: boolean = true ): any {
    options = {
      message,
      duration: 3000,
      position: 'bottom',
      ...options,
    };
    const handle = this.toastCtrl.create( options );
    if ( present ){ handle.present(); }
    return handle;
  }

}
