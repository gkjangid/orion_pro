import { BrowserModule }          from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule }             from '@angular/http';

import {
  IonicApp,
  IonicErrorHandler,
  IonicModule
} from 'ionic-angular';

import { StatusBar }         from '@ionic-native/status-bar';
import { SplashScreen }      from '@ionic-native/splash-screen';

import { MyApp }             from './app.component';

import { ComponentsModule }  from '../components/components.module';
import { DirectivesModule }  from '../directives/directives.module';

import { ApiProvider }       from '../providers/api/api';
import { SettingsProvider }  from '../providers/settings/settings';
import { UtilsProvider }     from '../providers/utils/utils';
import { WebsocketProvider } from '../providers/websocket';

@NgModule({

  declarations: [
    MyApp,
  ],

  imports: [
    BrowserModule,
    ComponentsModule,
    DirectivesModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],

  bootstrap: [
    IonicApp
  ],

  entryComponents: [
    MyApp,
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    ApiProvider,
    SettingsProvider,
    UtilsProvider,
    WebsocketProvider,
  ],

})
export class AppModule {}
