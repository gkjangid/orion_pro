import { Component, OnInit }          from '@angular/core';
import { NavParams, ViewController }  from 'ionic-angular';
import { Status }                     from '../../../providers/utils/utils';


@Component({
  selector:    'answer-feedback-modal',
  templateUrl: 'answer-feedback-modal.html'
})
export class AnswerFeedbackModalComponent implements OnInit {

  activity:     any;
  answer:       any;
  question:     any;
  status:       Status = null;
  userActivity: any;

  constructor(
    private navParams:  NavParams,
    private viewCtrl:   ViewController,
  ) { }

  ngOnInit(){
    this.activity     = this.navParams.get( 'activity' );
    this.answer       = this.navParams.get( 'answer' );
    this.question     = this.navParams.get( 'question' );
    this.status       = this.navParams.get( 'status' );
    this.userActivity = this.navParams.get( 'userActivity' );

    if ( this.status === null ){
      this.next();
    }
  }

  dismiss( data: any ): void {
    this.viewCtrl.dismiss( data );
  }

  next(){
    this.dismiss( 'next' );
  }

  retry(){
    this.dismiss( 'retry' );
  }

}
