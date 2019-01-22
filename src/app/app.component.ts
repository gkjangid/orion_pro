import { Component, HostListener, ViewChild } from '@angular/core';
import { Nav, Platform }  from 'ionic-angular';
import { ApiProvider }  from '../providers/api/api';


interface IPage {
  title:      string,
  component:  string | object,
  icon:       string,
  data?:      any,
}


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  readonly adminGroups: string[] = [
    'KCT-Checker',
    'KCT-Creator',
    'KCT-Inviter',
    'KCT-Activity-Data',
  ];

  readonly rootPage: any = 'HomePage';

  pages:      Array<IPage>;

  constructor(
    public api:       ApiProvider,
    public platform:  Platform,
  ) {
    this.pages = [
      { title: 'Activities',      component: 'HomePage',          icon: 'home'          },
//    { title: 'Notifications',   component: 'NotificationsPage', icon: 'notifications' },
//    { title: 'Preferences',     component: 'PreferencesPage',   icon: 'heart'         },
      { title: 'Network',         component: 'NetworkPage',       icon: 'people'        },
//    { title: 'Learner Profile', component: 'ProfilePage',       icon: 'pie'           },
//    { title: 'Leaderboard',     component: 'LeaderboardPage',   icon: 'ribbon'        },
      { title: 'Messaging',       component: 'MessagingPage',     icon: 'chatbubbles'   },
      { title: 'Feedback',        component: 'FeedbackPage',      icon: 'mail'          },
      { title: 'To Do List',      component: 'TodoListPage',      icon: 'md-done-all'   },
    ];
  }

  @HostListener( 'webkitfullscreenchange' ) onWebkitfullscreenchange( event: any ){
    if ( this.platform.is( 'android' ) ){
      document.webkitExitFullscreen();
    }
  }

  canAccessAdmin(): boolean {
    if ( !this.api.settings.user.groups ){ return false; }
    return this.api.settings.user.groups.some(
      item => this.adminGroups.indexOf( item ) != -1
    )
  }

  changePassword(): void {
    this.nav.push( 'ChangePasswordPage' );
  }

  logout(): void {
    this.api.settings.clearUser();
    this.nav.setRoot( 'LoginPage' );
  }

  openPage( page: IPage ):void {
    this.nav.push( page.component, { component: page.component } );
  }
}
