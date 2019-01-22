import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector:    'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {

  activity:     any     = {};
  deadline:     Date    = null;
  groups:       any[]   = [];
  individuals:  any[]   = [];
  minYear:      number  = new Date().getFullYear();
  maxYear:      number  = this.minYear + 2;
  segment:      string  = 'groups';
  showSpinner:  boolean = false;
  startDate:    Date    = null;

  constructor(
    public api:       ApiProvider,
    public navCtrl:   NavController,
    public navParams: NavParams,
  ){}

  alertInviteErrors( errors ): void {
    this.api.utils.alertCtrl.create({
      subTitle: 'The following have already enrolled.  No Invitations were sent to them.',
      message: errors.join( '\n' ),
      enableBackdropDismiss: false,
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

  getGroupName( name: string ): string {
    return name.split( '-' ).slice( 1 ).join( '-' ).trim();
  }

  getGroups( data ): any[] {
    return data.filter( item => item.name.startsWith( 'PVT-' ) );
  }

  getIndividuals( groups: any[] ): any[] {
    let individuals = {};
    groups.map( group => {
      group.users.map( user => {
        individuals [user.username] = user;
      });
    });
    return Object.keys( individuals ).sort().map( item => {
      return individuals [item];
    });
  }

  ionViewDidEnter(): void {
    this.activity = this.navParams.get( 'activity' );
    this.api.getMyGroupsWithUsers()
      .subscribe( data => {
        this.groups = this.getGroups( data );
        this.individuals = this.getIndividuals( this.groups );
      });
  }

  invite(): void {
    this.showSpinner = true;
    let data = {
      activityId: this.activity.id,

      groups: this.groups
        .filter( item => item.selected )
        .map( item => item.name ),

      individuals:this.individuals
        .filter( item => item.selected )
        .map( item => item.username ),

      startDate: this.startDate,
      deadline:  this.deadline,
      };
    if ( data.groups.length || data.individuals.length ){
      this.api.sendInvitations( data ).subscribe( response => {
        this.showSpinner = false;
        this.api.refreshData();

        let errors = response.data;
        if ( errors.length ){
          this.alertInviteErrors( errors );
        } else {
          this.navCtrl.pop();
        }
      });
    } else {
      this.showSpinner = false;
    }
  }

}
