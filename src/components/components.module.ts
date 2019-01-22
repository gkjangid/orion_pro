import { NgModule }                       from '@angular/core';
import { IonicModule }                    from 'ionic-angular';

import { AppMediaComponent }              from './app-media/app-media';
import { ChartComponent }                 from './chart/chart';
import { ContentGridComponent }           from './content-grid/content-grid';
import { JournalEditorComponent }         from './journal-editor/journal-editor';
import { ProgressBarComponent }           from './progress-bar/progress-bar';
import { UnderConstructionComponent }     from './under-construction/under-construction';

import { AnswerFeedbackModalComponent }   from '../pages/activity-answer/answer-feedback-modal/answer-feedback-modal';
import { ActivityListComponent }          from '../pages/home/activity-list/activity-list';
import { ActivitiesComponent }            from '../pages/home/tabs/activities/activities';
import { LearningJournalComponent }       from '../pages/home/tabs/learning-journal/learning-journal';
import { MyActivitiesComponent }          from '../pages/home/tabs/my-activities/my-activities';

import { QuillModule } from 'ngx-quill';

const components = [
  AnswerFeedbackModalComponent,
  ActivityListComponent,
  ActivitiesComponent,
  AppMediaComponent,
  ChartComponent,
  ContentGridComponent,
  JournalEditorComponent,
  LearningJournalComponent,
  MyActivitiesComponent,
  ProgressBarComponent,
  UnderConstructionComponent,
];

@NgModule({
  imports: [
    IonicModule,
    QuillModule,
  ],
	declarations:    [
    ...components,
  ],
  exports:         [
    ...components,
  ],
  entryComponents: [
    ...components,
  ],
})
export class ComponentsModule {}
