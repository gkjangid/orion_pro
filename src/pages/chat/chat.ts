import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Content, AlertController }            from 'ionic-angular';
import { ApiProvider }       from '../../providers/api/api';
import { SettingsProvider }  from '../../providers/settings/settings';
import { WebsocketProvider } from '../../providers/websocket';

interface IMessage {
  fromUser:     string,
  message:      string,
  team?:        string,
  toUserId?:    number,
}

interface ISegment {
  label: string,
  value: string,
}


@IonicPage()
@Component({
  selector:    'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @ViewChild( Content ) content: Content;

  allMessages:  IMessage[] = [];
  forumId:      string;
  invitation:   any;
  message:      string;
  messages:     IMessage[] = [];
  segment:      string = 'activity';
  segments:     ISegment[] = [
    { label: 'Activity', value: 'activity' },
    { label: 'Team',     value: 'team' },
  ];
  showSpinner:   boolean = true;
  team:          string;
  teams:         string[] = [];
  title:         string;
  userActivity:  any;


  constructor(
    public alertCtrl: AlertController,
    public api:       ApiProvider,
    public navCtrl:   NavController,
    public navParams: NavParams,
    public settings:  SettingsProvider,
    public websocket: WebsocketProvider,
  ){}

  changeTeam(): void {

    const getInputs = () => {
      return this.teams.map( item => {
        return {
          type:    'radio',
          name:    'team',
          label:   item,
          value:   item,
          checked: item == this.team,
        };
      })
    };

    const getButtons = () => {
      return [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: team => {
            this.filterMessages( team );
          },
        },
      ];
    };

    this.alertCtrl.create({
      title: 'Select Team',
      inputs: getInputs(),
      buttons: getButtons(),
    }).present();
  }

  changeSegment( segment: string ): void {
    if ( segment == 'activity' ){
      return this.filterMessages( '' );
    }
    if ( this.userActivity ){
      return this.filterMessages( this.userActivity.team );
    }
    if ( !this.team ){
      this.team = this.teams[0];
    }
    return this.filterMessages( this.team );
  }

  filterMessages( team: string ): void {
    this.team = team;
    if ( team ){
      this.messages = this.allMessages.filter( item => item.team == this.team );
    } else {
      this.messages = this.allMessages.filter( item => !item.team );
    }
    this.scrollToBottom();
  }

  getChatHistory(): void {
    const obs = this.userActivity?
    this.api.getUserActivityChatHistory( this.userActivity.id ) :
    this.api.getInvitationChatHistory( this.invitation.id );
    obs.subscribe( data => {
      this.showSpinner = false;
      this.allMessages = data;
      this.changeSegment( 'activity' );
      this.scrollToBottom();
    });
  }

  getforumId(): string {
    if ( this.invitation ){
      return this.invitation.id;
    }
    let forumId = this.userActivity.invitation_id;
    if ( this.userActivity.team ){
      forumId = `${forumId}/team/${ this.userActivity.team }`;
    }
    return forumId;
  }

  getTeams(): string[] {
    if ( this.invitation ){
      return this.navParams.get( 'teams' ) || [];
    }
    const team = this.userActivity.team;
    return team? [team] : [];
  }

  getWebsocket( forumId: string ): void {
    this.websocket.getForum( forumId ).subscribe( data => {
      const message: IMessage = JSON.parse( data );
      this.receivedMessage( message );
    });
  }

  ionViewDidEnter() {
    this.userActivity = this.navParams.get( 'userActivity' );
    if ( !this.userActivity ){
      this.invitation = this.navParams.get( 'invitation' );
      if ( !this.invitation ){
        this.navCtrl.setRoot( 'HomePage' );
        return;
      }
    }
    const obj    = this.userActivity || this.invitation;
    this.title   = obj.activity.title;
    this.forumId = this.getforumId();
    this.teams   = this.getTeams();
    this.getWebsocket( this.forumId );
    this.getChatHistory();
  }

  keyup( event: any ): void {
    if ( event.keyCode == 13 ){
      this.send();
    }
  }

  receivedMessage( message: IMessage ): void {
    this.allMessages.push( message );

    if ( this.segment == 'activity' ){
      if ( !message.team ){
        this.messages.push( message );
        this.scrollToBottom();
      }
      return;
    }

    if ( this.segment == 'team' ){
      if ( message.team == this.team ){
        this.messages.push( message );
        this.scrollToBottom();
      }
      return;
    }
  }

  scrollToBottom( delay: number = 100 ): void {
    setTimeout( () => {
      if ( this.content ) {
        try {
          this.content.scrollToBottom();
        }
        catch( e) {
          console.warn( 'scrollToBottom error' );
        }
      }
    }, delay );
  }

  send(): void {
    const message = this.message.trim();
    if ( !message ){ return; }
    let data: IMessage = {
      message,
      fromUser: this.settings.user.userName,
      team: this.segment == 'team'? this.team: null,
    }
    this.websocket.newMessage( this.forumId, data );
    this.message = '';
  }

}
