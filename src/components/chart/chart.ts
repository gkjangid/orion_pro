import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { GoogleCharts }   from 'google-charts';


@Component({
  selector:    'chart',
  templateUrl: 'chart.html'
})
export class ChartComponent implements OnInit {

  @Input() chartOptions:    any;
  @Input() chartType:       string  = 'BarChart';
  @Input() data:            any[];

  @Output() chartReady:     EventEmitter<any> = new EventEmitter();

  chartId:    string = this.get_chartId();
  chartData:  any;

  get_chartId(): string {
    return `chart${Math.round( Math.random() * 10000 )}`;
  }

  ngOnInit(){
    if( !this.chartType ){
      console.error( 'Unknown chart type' );
      return;
    }
    GoogleCharts.load(
      () => {
        this[ this.chartType ]();
      },
      [ 'gauge' ],
    );
  }

  drawChart(): any {
    if  ( !this.data ){
      console.error( `${this.chartType} error: no data` );
      return;
    }
    const chart = new GoogleCharts.api.visualization[ this.chartType ](
      document.getElementById( this.chartId )
    );
    GoogleCharts.api.visualization.events.addListener( chart, 'ready', () => {
      this.chartReady.emit( true );
     });
    chart.draw( this.chartData, this.chartOptions );
    return chart;
  }

  BarChart(): any {
    setTimeout( () => {
      this.chartData = GoogleCharts.api.visualization.arrayToDataTable( this.data );
      this.drawChart();
    }, 750 );
  }

  Gauge(): any {
    setTimeout( () => {
      this.chartData = GoogleCharts.api.visualization.arrayToDataTable( this.data );
      this.drawChart();
    }, 750 );
  }

}
