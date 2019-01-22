import { NgModule }           from '@angular/core';
import { IonicPageModule }    from 'ionic-angular';

import { ActivityAnswerPage } from './activity-answer';
import { ComponentsModule }   from '../../components/components.module';

import { AnswerActionComponent }          from './answer-action/answer-action';
import { AnswerCameraComponent }          from './answer-camera/answer-camera';
import { AnswerNumberComponent }          from './answer-number/answer-number';
import { AnswerRadioComponent }           from './answer-radio/answer-radio';
import { AnswerTableComponent }           from './answer-table/answer-table';
import { AnswerTextComponent }            from './answer-text/answer-text';
import { AnswerUploadComponent }          from './answer-upload/answer-upload';

const declarations = [
  ActivityAnswerPage,
  AnswerActionComponent,
  AnswerCameraComponent,
  AnswerNumberComponent,
  AnswerRadioComponent,
  AnswerTableComponent,
  AnswerTextComponent,
  AnswerUploadComponent,
];

@NgModule({
  declarations: [
    ...declarations,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ActivityAnswerPage),
  ],
  entryComponents: [
    ...declarations,
  ],
})
export class ActivityAnswerPageModule {}
