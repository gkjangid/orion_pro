import {
  Component,
  OnInit,
} from '@angular/core';

import { NavController }  from 'ionic-angular';
import { ApiProvider }    from '../../../../providers/api/api';

@Component({
  selector: 'my-activities',
  templateUrl: 'my-activities.html'
})
export class MyActivitiesComponent implements OnInit {

  activityGroup:  string    = 'Enrolled';
  showInfo:       boolean[] = [];
  today:          string;

  activityGroups: any[] = [
    { name: 'Enrolled',  label: 'Enrolled'  },
    { name: 'Started',   label: 'In Progress' },
    { name: 'Completed', label: 'Completed' },
  ]

  noActivitiesButtons: string[] = [
    "Search for Activities",
  ]
  showNoActivities: boolean = false;

  constructor(
    private api:      ApiProvider,
    private navCtrl:  NavController,
  ) { }

  ngOnInit(){
    this.api;
    this.today = this.getToday();
    setTimeout( () => {
      this.showNoActivities = true;
      const started = this.api.userActivities.some(
        item => item.state == 'Started'
      );
      if ( started ){
        this.activityGroup = 'Started';
      }
    }, 2000 );

  }

  getLocations( activity: any ): string {
    const locations = activity.locations || [];
    return locations.join( ', ' );
  }

  getToday(): string {
    const date  = new Date();
    const dd    = date.getDate();
    const mm    = date.getMonth();
    const yy    = date.getFullYear();
    const today = new Date( yy, mm, dd ).toISOString();
    return `${today.substr(0,19)}Z`;
  }

  runActivity( activity: any ): void {
    this.navCtrl.push( 'ActivityIntroPage', { id: activity.pk } );
  }

  selectTab( tabNo: number ): void {
    this.navCtrl.parent.select( tabNo );
  }

  toggleInfo( index: number ): void {
    this.showInfo [index] = !this.showInfo [index];
  }

  trackByActivity( index: number, activity: any ): string {
    return activity.pk;
  }

}
