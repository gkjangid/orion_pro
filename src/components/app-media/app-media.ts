import { Component, Input, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';


@Component({
  selector:    'app-media',
  templateUrl: 'app-media.html'
})
export class AppMediaComponent implements OnInit{

  @Input() cssClassImage:   string;
  @Input() cssClassVideo:   string;
  @Input() mediaUrl:        string;
  @Input() autoplay:        boolean = false;
  @Input() controls:        boolean = true;
  @Input() defaultImage:    string;

  type: string = '';

  @Input()
  set mediaType( type: string ){
    if ( !type ){ return; }
    if ( type.toLowerCase().indexOf( 'picture' ) != -1 ){
      this.type = 'image';
    }
    else
    if ( type.toLowerCase().indexOf( 'video' ) != -1 ){
      this.type = 'video';
    }
  }

  showDefaultImage: boolean = false;

  constructor(
    public platform: Platform,
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      this.showDefaultImage = true;
    }, 500);
  }

}
