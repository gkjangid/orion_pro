import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector:    'page-todo-detail',
  templateUrl: 'todo-detail.html',
})
export class TodoDetailPage {

  categories:   any[] = [];
  errorMsg:     string;
  footerColor:  string = 'light';
  maxYear:      number;
  minYear:      number;
  model:        any   = {};
  statuses:     any[] = [];

  constructor(
    public api:       ApiProvider,
    public navCtrl:   NavController,
    public navParams: NavParams,
  ){
    this.minYear = new Date().getFullYear();
    this.maxYear = this.minYear + 2;
  }

  checkInput(): boolean {
    if ( !this.model.description ){
      return this.error( 'Action cannot be blank' );
    }
    if ( !this.model.deadline ){
      this.errorMsg = 'Deadline cannot be blank'
      return;
    }
    if ( !this.model.category_id ){
      return this.error( 'Category cannot be blank' );
    }
    if ( this.model.status == 'completed' && !this.model.notes ){
      return this.error( 'Notes cannot be blank' );
    }
    this.errorMsg = '';
    this.footerColor = 'light';
    return true;
  }

  error( msg: string ): boolean {
    this.errorMsg    = msg;
    this.footerColor = 'danger';
    return false;
  }

  getData( todoId: number ): void {
    this.api.getUserActivityToDo( todoId ).subscribe( response => {
      this.statuses   = response.todoStatuses;
      this.categories = response.actionCategories;
      if ( todoId === 0 ) {
        this.model = { status: this.statuses [0] [0] };
      } else {
        this.model = response.data [0];
      }
    });
  }

  ionViewDidEnter(): void {
    const todoId = this.navParams.get( 'id' );
    if ( todoId === undefined ){
      this.navCtrl.setRoot( 'HomePage' );
    }
    this.getData( todoId );
  }

  save(): void {
    if ( !this.checkInput() ){ return; }
    this.api.postUserActivityToDo( this.model.id || 0, this.model ).subscribe( response => {
      this.navCtrl.pop();
    });
  }

}
