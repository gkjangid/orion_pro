import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ApiProvider }    from '../../providers/api/api';
import { UtilsProvider }  from '../../providers/utils/utils';


@IonicPage()
@Component({
  selector:    'page-messaging',
  templateUrl: 'messaging.html',
})
export class MessagingPage {

  readonly columns: object[] = [
    { name:'title',           label: 'Activity' },
    { name:'inviterUsername', label: 'Inviter' },
    { name:'created',         label: 'Date Invited' },
  ];

  readonly groups: string[] = [
    'KCT-Messaging',
    'KCT-Coach',
  ];

  invitations:  any[]  = [];
  selfEnrolled: any[]  = [];
  sortColumn:   string = 'date_completed';

  constructor(
    public api:           ApiProvider,
    public navCtrl:       NavController,
    public utils:         UtilsProvider,
  ){}

  getInvitations(): void {
    this.api.getMessagingActivities( this.api.user ).subscribe( response => {
      this.invitations = response.data.map( item => {
        item.title = item.activity.title;
        item.inviterUsername = item.inviter.username;

        const invitees  = item.invitees;
        const users     = Object.keys( invitees.completed );
        const completed = users.filter( item => !!invitees.completed [item] );
        item.completed = `${completed.length} / ${users.length}`;
        return item;
      });
    });
  }

  ionViewDidEnter(): void {
    if ( !this.utils.canAccessPage( this.groups, this.api.user ) ){
      this.navCtrl.setRoot( 'HomePage' );
      return;
    }
    this.getInvitations();
  }

  chatPage( invitation: any ): void {
    this.api.getInvitationTeams( invitation.id ).subscribe( data => {
      this.navCtrl.push( 'ChatPage', { invitation, teams: data.teams } );
    });
  }

}
