import { Component, OnInit }  from '@angular/core';
import { ApiProvider, Activity } from '../../../../providers/api/api';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector:    'activities',
  templateUrl: 'activities.html'
})
export class ActivitiesComponent implements OnInit {

  allActivities:  Activity[];
  activities:     Activity[];
  searchText:     string = '';
  searchSubject:  Subject<string> = new Subject();

  constructor(
    private api: ApiProvider,
  ){
    this.allActivities = this.sortActivities( this.api.activities );
    this.activities    = this.allActivities;
  }

  ngOnInit(): void {
    this.searchSubject
      .debounceTime( 500 )
      .distinctUntilChanged()
      .switchMap( text => {
        this.activities = this.search( text );
        return text;
      })
      .subscribe();
  }

  inputChanged( event: any ): void {
    this.searchSubject.next( event.target.value || ' ' );
  }

  search( text: string ): Activity[] {
    if ( !text.trim() ){ return this.allActivities; };
    const search: RegExp = new RegExp( text, 'i' );
    return this.allActivities.filter( activity => {
      return (
        search.test( activity.title ) ||
        search.test( activity.brief_description ) ||
        search.test( activity.description )
      );
    })
  }

  sortActivities( activities: Activity[] ): any[] {
    const key = 'modified';
    return activities.slice().sort( (x, y) => {
      return new Date( y[key] ).valueOf() - new Date( x[key] ).valueOf();
    });
  }

}
