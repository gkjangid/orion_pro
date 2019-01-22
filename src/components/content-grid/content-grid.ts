import { Component, AfterViewInit } from '@angular/core';


@Component({
  selector:    'content-grid',
  templateUrl: 'content-grid.html'
})
export class ContentGridComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(){
    setTimeout( this.resizeTextarea, 1000 );
  }

  resizeTextarea(): void {
    for ( let element of Array.from( document.querySelectorAll( 'textarea' ) ) ){
      if ( element.scrollHeight ){
        element.style.height = `${element.scrollHeight}px`;
      }
    }
  }

}
