import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'answer-upload',
  templateUrl: 'answer-upload.html'
})
export class AnswerUploadComponent implements OnInit {

  @Input()  question:     any = {};
  @Input()  questionIdx:  number;
  @Input()  userActivity: any = {};
  @Output() data:         EventEmitter<any> = new EventEmitter();

  objectUrl:      string  = null;
  file:           any     = null;
  filename:       string  = '';
  submitDisabled: boolean = true;

  constructor() { }

  ngOnInit() { }

  answerChanged( event ):void {
    const file = event.target.files[0];
    if ( !file ){
      this.objectUrl      = null;
      this.file           = null;
      this.filename       = '';
      this.submitDisabled = true;
      return;
    }
    this.objectUrl      = window.URL.createObjectURL( file );
    this.file           = file;
    this.filename       = file.name;
    this.submitDisabled = false;
  }

  submit(): void {
    this.data.emit( {
      file:      this.file,
      filename:  this.filename,
      objectUrl: this.objectUrl,
     });
  }

}
