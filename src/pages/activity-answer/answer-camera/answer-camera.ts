import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';


@Component({
  selector:    'answer-camera',
  templateUrl: 'answer-camera.html'
})
export class AnswerCameraComponent implements OnInit {

  @Input()  question:     any = {};
  @Input()  questionIdx:  number;
  @Input()  userActivity: any = {};
  @Output() data:         EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }
  //   const img  = this.userActivity.uploads[ this.questionIdx ];
  //   const time = new Date().valueOf();
  //   if ( img ){
  //     this.thumbnail = `${img}?${time}`;
  //   }
  // }

  answerChanged( event ):void {
    const file = event.target.files[0];
    if ( !file ){
      this.data.emit( {
        file:      null,
        objectUrl: null,
      });
    } else {
      this.data.emit( {
        file:      file,
        objectUrl: window.URL.createObjectURL( file ),
      });
      // this.thumbnail = this.sanitizer.bypassSecurityTrustResourceUrl( this.objectUrl );
    }
  }

}
