import { Component }     from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../../../providers/api/api';


@Component({
  selector:    'learning-journal',
  templateUrl: 'learning-journal.html'
})
export class LearningJournalComponent {

  appFeatures:  { [name: string] : boolean } = {};
  journals:     any     = {}
  segment:      string  = 'general';
  showSpinner:  boolean = false;

  constructor(
    public api:     ApiProvider,
    public navCtrl: NavController,
  ){}

  activityJournalPage( userActivityJournal: any ): void {
    this.showSpinner = true;
    this.navCtrl.push( 'ActivityJournalPage', {
      activity:     userActivityJournal.activity,
      userActivity: userActivityJournal.user_activity,
    })
    .then( () => {
      this.showSpinner = false;
    });
}

featureEnabled( name: string ): boolean {
  const feature = this.appFeatures [name];
  if ( feature === undefined ){
    return true;
  }
  return feature;
}

getAppFeatures(): void {
  this.api.getAppFeature().subscribe( response => {
    response.data.map( item => {
      this.appFeatures [item.name] = item.enabled;
    });
  });
}

getData(): void {
    this.api.getLearningJournal().subscribe( data => {
      this.journals.general = data;
    });
    this.api.getUserActivityJournal().subscribe( data => {
      this.journals.activity = data;
    });
  }

  ionViewDidEnter(): void {
    if ( !this.api.user.userId ){
      this.navCtrl.push( 'LoginPage' );
      return;
    }
    this.getAppFeatures();
    this.getData();
  }

  learningJournalPage( learningJournal?: any ): void {
    this.showSpinner = true;
    this.navCtrl.push( 'LearningJournalPage', { learningJournal } )
      .then( () => {
        this.showSpinner = false;
      });
  }
  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    
  ];
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
