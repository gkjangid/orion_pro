import { Component }      from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Platform,
}  from 'ionic-angular';

import { ApiProvider }  from '../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  chartHeight:      number;
  chartOn:          any = {
    gauge:    false,
    barChart: true,
  };
  chartWidth:       number;
  data:             any       = {};
  loading:          any;
  selectedSegment:  string    = 'skills';
  segmentList:      string[]  = [ 'skills', 'subjects' ];
  showCharts:       any       = {};
  userProfile:      any       = {};

  chartOptions = {

    BarChart : {
      width:      null,
      height:     null,
      legend:     'none',
      isStacked:  true,
      hAxis:      {
        maxValue: 100,
      },
    },

    Gauge: {
      redFrom:     0,   redTo:     25,
      yellowFrom: 25,   yellowTo:  50,
      greenFrom:  50,   greenTo:  100,
      majorTicks: new Array(11).fill( null ),
    },

  };


  constructor(
    public api:       ApiProvider,
    public navCtrl:   NavController,
    public navParams: NavParams,
    public platform:  Platform,
  ) {
    this.chartOptions.BarChart.height = Math.round( this.platform.height() * 0.7 );
    this.chartOptions.BarChart.width  = Math.round( this.platform.width()  * 1 );
  }

  chartReady( event: any, segment: string ): void {
      this.showCharts[ segment ] = true;
      if ( this.loading ){
        this.loading.dismiss();
        this.loading = null;
      }
  }

  get_scores( userProfile: any, type: string ): any[] {
    let scores  = userProfile ['scores'] [type] || {};
    let keys    = Object.keys( scores ).sort()
    let data    = keys.map( key => {
      const score     = scores [key] [0];
      const maxScore  = scores [key] [1];
      const value     = 100 * score / maxScore;
      return [ key, value ];
    });
    if ( data.length == 0 ){
      data = [[ 'N/A', '' ]];
    } else {
      data.sort( ( x, y ) => ( y[1] as number ) - ( x[1] as number ) )
    }
    return [
      [ 'Name', 'Score' ],
      ...data,
    ];
  }

  ionViewDidEnter(){
    if ( !this.api.user.userId ){
      this.navCtrl.setRoot( 'LoginPage' );
      return;
    }
    this.loading = this.api.loading( '', 2000, { showBackdrop: false } );
    this.api.getUserProfile()
      .subscribe( data => {
        this.userProfile        = data;
        this.data[ 'skills' ]   = this.get_scores( data, 'skill' );
        this.data[ 'subjects']  = this.get_scores( data, 'subjects' );
      });
  }

}
