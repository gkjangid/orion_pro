import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector:    'answer-action',
  templateUrl: 'answer-action.html'
})
export class AnswerActionComponent implements OnInit {

  @Input()  photoChanged: boolean = false;
  @Input()  question:     any = {};
  @Input()  questionIdx:  number;
  @Input()  userActivity: any = {};
  @Output() data:         EventEmitter<any> = new EventEmitter();

  maxYear:    number;
  minYear:    number;
  model:      any = {};

  constructor(){
    this.minYear = new Date().getFullYear();
    this.maxYear = this.minYear + 2;
  }

  answerChanged( event ): void {
    if ( !this.model.answer || !this.model.deadline ){
      console.error( 'AnswerActionComponent: invalid data' );
      return;
    }
    this.data.emit( this.userActivity.answers[ this.questionIdx ] );
  }

  ngOnInit(): void {
    this.userActivity.answers[ this.questionIdx ] = this.userActivity.answers[ this.questionIdx ] || {};
    this.model = this.userActivity.answers[ this.questionIdx ];
  }

}
