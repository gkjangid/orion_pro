import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';


@Component({
  selector:    'answer-number',
  templateUrl: 'answer-number.html'
})
export class AnswerNumberComponent {

  @Input()  photoChanged: boolean = false;
  @Input()  question:     any = {};
  @Input()  questionIdx:  number;
  @Input()  userActivity: any = {};
  @Output() data:         EventEmitter<any> = new EventEmitter();

  constructor() { }

  answerChanged( event ): void {
    this.data.emit( event );
  }

}
