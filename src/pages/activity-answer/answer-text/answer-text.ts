import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';


@Component({
  selector:    'answer-text',
  templateUrl: 'answer-text.html'
})
export class AnswerTextComponent {

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
