import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsPage } from './notifications';
import { ComponentsModule }  from '../../components/components.module'

@NgModule({
  declarations: [
    NotificationsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(NotificationsPage),
  ],
})
export class NotificationsPageModule {}
