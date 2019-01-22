import { Injectable }                 from '@angular/core';
import { Http }                       from '@angular/http';
import { Observable }                 from 'rxjs/Observable';
import { SettingsProvider, User }     from '../settings/settings';
import { UtilsProvider }              from '../../providers/utils/utils';
import { AlertController, Events, LoadingController, ToastController } from 'ionic-angular';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/empty';


export interface Activity {
  pk:                 number,
  title:              string,
  image:              string,
  brief_description:  string,
  description:        string,
  [name: string]:     any;
}

export interface ApiResponse {
  data: any,
}

export interface ToastOptions {
  message:              string,
  duration?:            number,
  position?:            string,
  cssClass?:            string,
  showCloseButton?:     boolean,
  closeButtonText?:     string,
  dismissOnPageChange?: boolean,
}


@Injectable()
export class ApiProvider {

  activities:           any[]  = [];
  httpOptions:          object = { withCredentials: true };
  user:                 User;
  userActivities:       any[]  = [];

  constructor(
    public alertCtrl:     AlertController,
    public events:        Events,
    public http:          Http,
    public loadingCtrl:   LoadingController,
    public settings:      SettingsProvider,
    public toastCtrl:     ToastController,
    public utils:         UtilsProvider,
  ) {
    this.user = this.settings.user;
    this.events.subscribe( 'login', user => {
      this.user = this.settings.user;
      this.refreshData();
    });
  }

  addUserActivity( activity: any ): any {
    const activitySummary = {
      pk:          activity.id,
      title:       activity.title,
      description: activity.briefDescription,
      pictureUrl:  activity.pictureUrl,
      fromDate:    activity.fromDate,
      toDate:      activity.toDate,
      fromTime:    activity.fromTime,
      toTime:      activity.toTime,
      locations:   activity.locations,
      state:       'Enrolled',
    }
    const userActivityPks = this.userActivities.map( item => item.pk );
    if ( userActivityPks.indexOf( activitySummary.pk ) == -1 ){
      this.userActivities.unshift( activitySummary );
      return activitySummary;
    }
  }

  deleteUserActivity( userActivityId: number ): Observable<any> {
    const url = this.getUrl( `UserActivity/${userActivityId}/` );
    return this.post( url, {} );
  }

  enrollActivity( activity: any ): Observable<any> {
    if ( !this.user.userId ){
      alert( 'User ID not found!' );
      throw( 'User ID not found!' );
    }
    const url = this.getUrl( 'UserActivity/' );
    return this.post( url, {
        user:     this.user.userId,
        activity: activity.id,
    })
    .do( () => {
      const activitySummary = this.addUserActivity( activity );
      this.events.publish( 'activityEnrolled', activitySummary );
    });
  }

  get( url: string, options?: object ): Observable<any> {
    return this.http.get( url, options || this.httpOptions )
      .map( response => response.json() );
  }

  getActivity( activityId: number ): Observable<any> {
    let url = this.getUrl( `Activity/${activityId}/` );
    return this.get( url )
      .map( response => {
        return response.data;
      });
  }

  getActivityList(): Observable<any> {
    let url = this.getUrl( 'ActivityQuery/' );
    return this.get( url )
      .map( response => {
        return response.data;
      });
  }

  getAppFeature( name?: string ): Observable<any> {
    let resource = 'AppFeature/';
    if( name ){
      resource = `${resource}${name}/`;
    }
    let url = this.getUrl( resource );
    return this.get( url );
  }

  getInvitation( invitationId: number ): Observable<any> {
    const url = this.getUrl( `Invitation/${invitationId}` );
    return this.get( url );
  }

  getInvitationChatHistory( invitationId: number ): Observable<any> {
    let url = this.getUrl( `InvitationChatMessage/${invitationId}/` );
    return this.get( url )
      .map( response => {
        return response.data;
      });
  }

  getInvitationTeams( invitationId: number ): Observable<any> {
    const url = this.getUrl( `InvitationTeams/${invitationId}/` );
    return this.get( url );
  }

  getLearningJournal( learningJournalId?: number ): Observable<any> {
    let resource = 'LearningJournal/';
    if( learningJournalId ){
      resource = `${resource}${learningJournalId}/`;
    }
    let url = this.getUrl( resource );
    return this.get( url )
        .map( response => {
          return response.data;
        });
  }

  getMessagingActivities( user: User ): Observable<any> {
    const url = this.getUrl( `MessagingActivities/${ user.userId }/` );
    return this.get( url );
  }

  getMyGroups(): Observable<any> {
    let url = this.getUrl( 'MyGroups/' );
    return this.get( url )
      .map( response => {
        return response.data;
      });
  }

  getMyGroupsWithUsers(): Observable<any> {
    let url = this.getUrl( 'MyGroupsWithUsers/' );
    return this.get( url )
      .map( response => {
        return response.data;
      });
  }

  getOrigin(): string {
    return '';
    //return 'https://yakamoz.kuriocities.com';

  }

  getUrl( resource: string, version: string = 'v1' ): string {
    if ( !resource ){ return null; }
    return `${ this.getOrigin() }/api/${ version }/${ resource }`;
  }

  getUserActivities( activityId?: number ): Observable<any> {
    let url = this.getUrl( 'UserActivity/' );
    if ( activityId ){
      url = `${url}${activityId}/`;
    }
    return this.get( url )
      .map( response => {
        return response.data;
      });
  }

  getUserActivityChatHistory( userActivityId: number ): Observable<any> {
    let url = this.getUrl( `UserActivityChatMessage/${userActivityId}/` );
    return this.get( url )
      .map( response => {
        return response.data;
      });
  }

  getUserActivityJournal( userActivityId?: number ): Observable<any> {
    let resource = 'UserActivityJournal/';
    if( userActivityId ){
      resource = `${resource}${userActivityId}/`;
    }
    let url = this.getUrl( resource );
    return this.get( url )
        .map( response => {
          return response.data;
        });
  }

  getUserActivityToDo( userActivityToDoId?: number ): Observable<any> {
    let resource = 'UserActivityToDo/';
    if( userActivityToDoId !== undefined ){
      resource = `${resource}${userActivityToDoId}/`;
    }
    let url = this.getUrl( resource );
    return this.get( url );
  }

  getUserProfile(): Observable<any> {
    let url = this.getUrl( 'UserProfile/' );
    return this.get( url )
      .map( response => {
        return response.data;
      });
  }

  loading( content: string, duration: number = 3000, otherOptions?: any ): any {
    const loader = this.loadingCtrl.create({
      content:  content,
      duration: duration,
      ...( otherOptions || {} ),
    });
    loader.present();
    return loader;
  }

  post( url: string, data: any, options?: object, json?: boolean ): Observable<any> {
    if ( !url ){ debugger }
    let postData;
    if ( json ){
      postData = JSON.stringify( data );
    } else {
      postData = new FormData();
      for ( let key in data ){
        postData.append( key, data[ key ] );
      }
    }
    return this.http.post( url, postData, options || this.httpOptions )
      .map( response => {
        return response.json()
      });
  }

  postUserActivityJournal( userActivityId: number, data: any ): Observable<any> {
    const resource = `UserActivityJournal/${userActivityId}/`;
    const url = this.getUrl( resource );
    return this.post( url, data );
  }

  postChangePassword( data: any ): Observable<any> {
    const url = this.getUrl( 'ChangePassword/' );
    return this.post( url, data, null, true );
  }

  postFeedback( data: any ): Observable<any> {
    const url = this.getUrl( 'Feedback/' );
    return this.post( url, data );
  }

  postImage( data: any ): Observable<any> {
    const url = this.getUrl( `Image/` );
    return this.post( url, data );
  }

  postLearningJournal( learningJournalId: number, data: any ): Observable<any> {
    let resource = 'LearningJournal/';
    if( learningJournalId ){
      resource = `${resource}${learningJournalId}/`;
    }
    let url = this.getUrl( resource );
    return this.post( url, data );
  }

  postLearningJournalActivity( learningJournalId: number, data: any ): Observable<any> {
    let url = this.getUrl( `LearningJournalActivity/${learningJournalId}/` );
    return this.post( url, data );
  }

  postRegister( data: any ): Observable<any> {
    const url = this.getUrl( 'Register/' );
    return this.post( url, data, null, true );
  }

  postUserActivityToDo( userActivityToDoId: number, data: any ): Observable<any> {
    let resource = `UserActivityToDo/${userActivityToDoId}/`;
    const url    = this.getUrl( resource );
    return this.post( url, data );
  }

  refreshData(): void {
    this.getUserActivities()
      .subscribe( data => {
        this.userActivities = data;
      });

    this.getActivityList()
      .subscribe( data => {
        this.activities = data;
      });
  }

  sendInvitations( data: any ): Observable<any> {
      const url = this.getUrl( `Invitation/` );
      return this.post( url, data, null, true );
  }

  setUserActivityTeam( data: any ): Observable<any> {
    const url = this.getUrl( 'UserActivityTeam/' );
    return this.post( url, data, null, true );
  }

  setUserActivityStateCompleted( activity: any ): void {
    const activityId = activity.id;
    for( let userActivity of this.userActivities ){
      if ( userActivity.pk == activityId ){
        if ( userActivity.state.toLowerCase() == 'started' ){
          userActivity.state = 'Completed';
        }
        break;
      }
    }
  }

  setUserActivityStateStarted( activity: any ): void {
    const activityId = activity.id;
    for( let userActivity of this.userActivities ){
      if ( userActivity.pk == activityId ){
        if ( userActivity.state.toLowerCase() == 'enrolled' ){
          userActivity.state = 'Started';
        }
        break;
      }
    }
  }

  toast( options: ToastOptions ): any {
    return this.toastCtrl.create( options );
  }

  userActivityAction( activityId, data: any ): Observable<any> {
    const url = this.getUrl( `UserActivityAction/${activityId}/` );
    return this.post( url, data, null );
  }

}
