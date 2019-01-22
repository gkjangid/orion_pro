import { Component, OnInit } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider }  from '../../providers/api/api';


@IonicPage({ segment: 'activity-info/:id' })
@Component({
  selector: 'page-activity-info',
  templateUrl: 'activity-info.html',
})
export class ActivityInfoPage implements OnInit {

  activity:           any = {};
  activityId:         number;
  enrolled:           number[];
  enrollBtnDisabled:  boolean = null;

  constructor(
    private api:        ApiProvider,
    private events:     Events,
    private navCtrl:    NavController,
    private navParams:  NavParams,
  ) { }

  ngOnInit(){
    this.events.subscribe( 'login', user => {
      if ( !this.activityId ){ return; }
      this.getActivity( this.activityId );
    });
  }

  checkEnrollment( activity: any, enrolled: number[] ): boolean {
    return enrolled.indexOf( activity.id ) != -1
  }

  enroll(): void {
    if( !this.api.user.userId ){
      console.error( 'Unknown user' );
      alert( 'Unknown user' );
      return;
    }
    this.api.enrollActivity( this.activity )
      .subscribe( response => {
        let msg;
        if ( response.data.enrolled ){
          this.navCtrl.popToRoot();
          msg = `'${this.activity.title}' added to your activity list`;
        } else {
          msg = `'${this.activity.title}' is already in your activity list`;
        }
        const toast = this.api.toast({
          message:  msg,
          duration: 4000,
          position: 'middle',
        });
        toast.present();
      });
  }

  getActivity( activityId: number ): void {
    this.api.getActivity( activityId )
      .subscribe( data => {
        this.activity = data.data;
        this.enrollBtnDisabled = this.checkEnrollment( this.activity, this.enrolled ) || null;
      });
  }

  getMultiData( activity: any, field: string ): string {
    if ( !activity || !activity.questions ){
      return '';
    }
    let values: any = [];
    activity.questions.map( question => {
      let value = question[ field ];
      if ( !value ){ return; }
      if ( !(value instanceof Array) ){
        value = [value];
      }
      values.push( ...value );
    });
    values = Array.from( new Set( values ) );
    return values.join( ', ' );
  }

  getlist( field: string ): string {
    if ( !this.activity ) { return ''; }
    let data = this.activity[ field ];
    if ( !data ) { return ''; }
    data = Array.from( new Set(
      data.filter( x => !!x )
    ))
    return data.join(', ');
  }

  getSkill(): string {
    return this.getMultiData( this.activity, 'skill' );
  }

  getSubjects(): string {
    return this.getMultiData( this.activity, 'subjects' );
  }

  invite(): void {
    this.navCtrl.push( 'InvitePage', { activity: this.activity } )
  }

  ionViewDidEnter(){
    if ( !this.api.user.userId ){
      this.navCtrl.push( 'LoginPage' );
      return;
    }
    this.activityId = this.navParams.get( 'id' );
    if ( !this.activityId ) {
      this.navCtrl.setRoot( 'HomePage' );
      return;
    }
    this.enrolled = this.navParams.get( 'enrolled' ) || [];
    this.getActivity( this.activityId );
  }

  send(): string {
    if ( !this.activity ) { return ''; }
    const url        = window.location.href.split('#')[0];
    const activityId = window.location.href.split('/').pop();
    const title      = this.activity.title;
    const subject    = encodeURIComponent( title );
    const body       = encodeURIComponent(
      `${url}#/activity-info/${activityId}`
    );
    return `mailto:?subject=${subject}&body=${body}`;
  }

  showButtonIf( group: string ): boolean {
    return this.api.user.groups.indexOf( group ) != -1;
  }

  showToolbar(): boolean {
    if ( !this.activity ) { return; }
    return (
      this.activity.status == "Published"
      || this.api.user.groups.indexOf( 'KCT-Previewer' ) != -1
    );
  }

}
