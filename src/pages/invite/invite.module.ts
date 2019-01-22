import { NgModule }         from '@angular/core';
import { IonicPageModule }  from 'ionic-angular';
import { InvitePage }       from './invite';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    InvitePage,
  ],
  imports: [
    IonicPageModule.forChild(InvitePage),
    ComponentsModule,
  ],
})
export class InvitePageModule {}
