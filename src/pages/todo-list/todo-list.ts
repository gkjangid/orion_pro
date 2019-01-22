import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector:    'page-todo-list',
  templateUrl: 'todo-list.html',
})
export class TodoListPage {

  statusMap:    any   = {};
  today:        Date;
  todos:        any[] = [];
  todoStatuses: Array<string[]> = [];

  constructor(
    public api:       ApiProvider,
    public navCtrl:   NavController,
    public navParams: NavParams,
  ){
    this.today = new Date();
    this.today.setHours( 0,0,0,0 );
  }

  gotoTodo( todo?: any, index?: number ): void {
    let data = { id : 0 };
    if ( todo ){
      data = { id: todo.id } ;
    }
    this.navCtrl.push( 'TodoDetailPage', data );
  }

  ionViewDidEnter(): void {
    if ( !this.navParams.get( 'component' ) ){
      this.navCtrl.setRoot( 'HomePage' );
      return;
    }

    this.api.getUserActivityToDo().subscribe( response => {
      this.todos = response.data;
      this.todoStatuses = response.todoStatuses;
      this.todoStatuses.map( item => {
        this.statusMap [ item[0] ] = item[1];
      });
    });
  }

  overdue( todo: any ): string {
    if ( todo.status == 'in-progress' && this.today > new Date( todo.deadline ) ){
      return ' (overdue)';
    }
  }

}
