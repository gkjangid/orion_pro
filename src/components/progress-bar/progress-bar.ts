import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  @Input() progress:  number;
  @Input() segments:  number = 4;

  progressSegments:   number[] = new Array( this.segments ).fill( 0 );
  perSegment:         number   = 100 / this.segments;
  perSegmentWidth:    string   = this.perSegment + '%';

  getSegmentProgress( segmentNo: number, progress: number ): string {
    const segmentMax = this.perSegment * ( segmentNo + 1 );
    const segmentMin = this.perSegment * segmentNo;
    if ( progress >= segmentMax ){
      this.progressSegments[ segmentNo ] = 100;
      return '100%';
    }
    if ( progress <= segmentMin ){
      this.progressSegments[ segmentNo ] = 0;
      return '0%';
    }
    const segmentAmt = progress - segmentMin;
    const amt = Math.round( 100 * segmentAmt / this.perSegment );
    this.progressSegments[ segmentNo ] = amt;
    return  `${amt}%`;
  }

}
