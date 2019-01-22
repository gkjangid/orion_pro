import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearningJournalPage } from './learning-journal';
import { ComponentsModule }    from '../../components/components.module';

@NgModule({
  declarations: [
    LearningJournalPage,
  ],
  imports: [
    IonicPageModule.forChild(LearningJournalPage),
    ComponentsModule,
  ],
})
export class LearningJournalPageModule {}
