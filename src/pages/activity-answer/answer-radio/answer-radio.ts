import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';


@Component({
  selector:    'answer-radio',
  templateUrl: 'answer-radio.html'
})
export class AnswerRadioComponent {

  @Input()  photoChanged: boolean = false;
  @Input()  question:     any = {};
  @Input()  questionIdx:  number;
  @Input()  userActivity: any = {};
  @Output() data:         EventEmitter<any> = new EventEmitter();

  answerChanged( event ): void {
    this.data.emit( event );
  }

  answerChangedRadio( event ): void {
    if ( !this.question.photoUpload ) {
      this.data.emit( event );
    }
  }

}
