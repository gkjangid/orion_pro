import { NgModule }           from '@angular/core';
import { IonicPageModule }    from 'ionic-angular';
import { PreferencesPage }    from './preferences';
import { ComponentsModule }   from '../../components/components.module';

@NgModule({
  declarations: [
    PreferencesPage,
  ],
  imports: [
    IonicPageModule.forChild(PreferencesPage),
    ComponentsModule,
  ],
})
export class PreferencesPageModule {}
