import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangePasswordPage } from './change-password';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ChangePasswordPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ChangePasswordPage),
  ],
})
export class ChangePasswordPageModule {}
