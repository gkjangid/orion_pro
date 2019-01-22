import { NgModule } from '@angular/core';
import { IonicPageModule }    from 'ionic-angular';
import { ActivityInfoPage }   from './activity-info';
import { ComponentsModule }   from '../../components/components.module';

@NgModule({
  declarations: [
    ActivityInfoPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ActivityInfoPage),
  ],
})
export class ActivityInfoPageModule {}
