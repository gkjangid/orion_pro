import { NgModule }           from '@angular/core';
import { IonicPageModule }    from 'ionic-angular';
import { ActivityIntroPage }  from './activity-intro';
import { ComponentsModule }   from '../../components/components.module';

@NgModule({
  declarations: [
    ActivityIntroPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ActivityIntroPage),
  ],
})
export class ActivityIntroPageModule {}
