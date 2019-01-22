import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Events, NavController }  from 'ionic-angular';
import { Activity, ApiProvider }  from '../../../providers/api/api';


@Component({
  selector: 'activity-list',
  templateUrl: 'activity-list.html',
})
export class ActivityListComponent implements OnInit {

  @Input() activities:      Activity[]  = [];
  @Input() filterEnrolled:  boolean     = true;
  @Input() format:          string      = '';

  enrolledIds: number[] = [];

  constructor(
    private api:      ApiProvider,
    private events:   Events,
    private navCtrl:  NavController,
  ) { }

  ngOnInit(){
    this.enrolledIds = this.getEnrolledIds();

    this.events.subscribe( 'activityEnrolled', activity => {
      this.enrolledIds = this.getEnrolledIds();
    });
  }

  getEnrolledIds(): number[] {
    return this.api.userActivities.map( item => {
      return item.pk;
    });
  }

  activityInfo( activity: Activity ): void {
    this.navCtrl.push( 'ActivityInfoPage', {
      id: activity.pk,
      activity: activity,
      enrolled: this.enrolledIds,
    });
  }

}
