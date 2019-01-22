import { NgModule }               from '@angular/core';
import { IonicPageModule }        from 'ionic-angular';
import { TodoDetailPage }         from './todo-detail';
import { ComponentsModule }       from '../../components/components.module';

@NgModule({
  declarations: [
    TodoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TodoDetailPage),
    ComponentsModule,
  ],
})
export class TodoDetailPageModule {}
