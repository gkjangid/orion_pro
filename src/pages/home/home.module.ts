import { NgModule }         from '@angular/core';
import { IonicPageModule }  from 'ionic-angular';

import { HomePage }           from './home';
import { ComponentsModule }   from '../../components/components.module';

const declarations = [
  HomePage,
]

@NgModule({
  declarations: [
      ...declarations,
    ],
  imports: [
    IonicPageModule.forChild(HomePage),
    ComponentsModule,
  ],
  entryComponents: [
    ...declarations,
  ],
})
export class HomePageModule {}
