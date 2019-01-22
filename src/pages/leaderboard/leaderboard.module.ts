import { NgModule }           from '@angular/core';
import { IonicPageModule }    from 'ionic-angular';
import { LeaderboardPage }    from './leaderboard';
import { ComponentsModule }   from '../../components/components.module';

@NgModule({
  declarations: [
    LeaderboardPage,
  ],
  imports: [
    IonicPageModule.forChild(LeaderboardPage),
    ComponentsModule,
  ],
})
export class LeaderboardPageModule {}
