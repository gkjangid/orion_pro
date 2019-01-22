import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoadingController, ToastController }     from 'ionic-angular';
import { ApiProvider }  from '../../providers/api/api';


@Component({
  selector:    'journal-editor',
  templateUrl: 'journal-editor.html'
})
export class JournalEditorComponent {

  _text:  string = '';
  editor: any    = {};

  @Output() error:      EventEmitter<string> = new EventEmitter();
  @Output() textChange: EventEmitter<string> = new EventEmitter();

  @Input() height:  string = '40vh';
  @Input() modules: any = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      ['image'],
    ]
  }

  @Input()
  get text(){
    return this._text;
  }
  set text( value: string ){
    this._text = value;
    this.textChange.emit( value );
  }


  constructor(
    public api:         ApiProvider,
    public toastCtrl:   ToastController,
    public loadingCtrl: LoadingController,
  ){}


  contentChanged( event ){
    this.text = event.html;
  }

  editorCreated( editorInstance: any ): void {
    this.editor   = editorInstance;
    const toolbar = editorInstance.getModule( 'toolbar' );
    toolbar.addHandler( 'image', this.imageHandler.bind( this ) );
  }

  imageHandler(): void {
    const input = document.createElement( 'input' );
    input.setAttribute( 'type', 'file' );
    input.click();
    input.onchange = () => {
      const file = input.files [0];

      if ( /^image\//.test( file.type ) ) {
        this.uploadImage( file );
      } else {
        this.error.emit( 'You can only upload images' );
      }
    };
  }

  placeInEditor( url: string ): void {
    const range = this.editor.getSelection();
    this.editor.insertEmbed( range.index, 'image', url );
  }

  uploadImage( file: File ): void {
    const loading = this.loadingCtrl.create({
      content: 'Please wait...',
    });
    loading.present();

    this.api.postImage({ image: file }).subscribe( response => {
      this.placeInEditor( response.uploads.image );
      loading.dismiss();
    });
  }

}
