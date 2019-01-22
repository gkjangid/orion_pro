import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityJournalPage } from './activity-journal';
import { ComponentsModule }    from '../../components/components.module';

@NgModule({
  declarations: [
    ActivityJournalPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivityJournalPage),
    ComponentsModule,
  ],
})
export class ActivityJournalPageModule {}
