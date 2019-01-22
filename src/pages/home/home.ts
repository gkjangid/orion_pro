import { Component, ViewChild }               from '@angular/core';
import { Content, IonicPage, NavController }  from 'ionic-angular';
import { ApiProvider }                        from '../../providers/api/api';
import { SettingsProvider }                   from '../../providers/settings/settings';

import { ActivitiesComponent }                from './tabs/activities/activities';
import { LearningJournalComponent }           from './tabs/learning-journal/learning-journal';
import { MyActivitiesComponent }              from './tabs/my-activities/my-activities';

export interface TabInfo {
  title:      string,
  icon:       string,
  component:  any,
}

export const TabList: TabInfo[]  = [
  { title: 'My Activities',icon:'ios-home', component: MyActivitiesComponent },
  { title: 'Activities',icon:'ios-apps', component: ActivitiesComponent },
  { title: 'Journals',icon:'ios-book', component: LearningJournalComponent },
]


@IonicPage({
  segment: 'activity',
})
@Component({
  selector:    'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild( Content ) content: Content;

  showLogo: boolean   = true;
  showTabs: boolean   = false;
  tabs:     TabInfo[] = TabList;

  constructor(
    public api:        ApiProvider,
    public navCtrl:    NavController,
    public settings:   SettingsProvider,
  ) {
    this.api;
  }

  ionViewDidEnter(){
    if ( !this.settings.user.userId ){
      setTimeout( () => {
        this.navCtrl.push( 'LoginPage' );
        return;
      }, 1500 );
    }

    if ( this.navCtrl.parent !== null ){
      this.showTabs = false;
      window.location.reload();
      return;
    }

    this.content.resize();
    this.showTabs = true;
  }

}
