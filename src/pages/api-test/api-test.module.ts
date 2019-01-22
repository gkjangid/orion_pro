import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApiTestPage } from './api-test';

@NgModule({
  declarations: [
    ApiTestPage,
  ],
  imports: [
    IonicPageModule.forChild(ApiTestPage),
  ],
})
export class ApiTestPageModule {}
