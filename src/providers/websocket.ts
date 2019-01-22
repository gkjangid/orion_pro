import { Injectable }       from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { Platform }         from 'ionic-angular';
import { BehaviorSubject }  from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/filter';

const RECONNECT_INTERVAL = 1000;
const RECONNECT_RETRIES  = 20;


@Injectable()
export class WebsocketProvider {

  _retries:   number = RECONNECT_RETRIES;
  forums:     any    = {};
  websockets: any    = {};
  subjects:   any    = {};

  constructor(
    public platform: Platform,
  ){}

  closeSocket( forumId: any ): void {
    const socket = this.websockets [forumId];
    if ( socket ){
      socket.close();
    }
  }

  getForum( forumId: any, onopen?: Function ): Observable<any> {
    let obs = this.forums [forumId] || this.newForum( forumId, onopen );
    return obs.filter( item => !!item );
  }

  getOrigin( protocol?: string ): string {
    protocol = protocol || window.location.hostname.indexOf( 'localhost' ) == -1? 'wss:' : 'ws:'
    const server = window.location.search
      .substr(1)
      .split( '&' )
      .map( item => {
        const [k,v] = item.split( '=' );
        if ( k == 's' ){
          if( v.indexOf('://') == -1 ){
            return `ws://${v}`;
          } else {
            return v.replace( /.*?:\/\//, 'ws://' );
          }
        }
      })
      .filter( item => !!item );

      return server[0] || `${protocol}//${window.location.hostname}`;
  }

  leaveForum( forumId: any ): void {
    this.closeSocket( forumId );
    this.subjects   [forumId] = null;
    this.forums     [forumId] = null;
    this.websockets [forumId] = null;
  }

  login( systemForumId: any, token: string ): void {
    this.websockets [systemForumId].send( JSON.stringify({
      type: 'authenticate',
      token,
    }));
  }

  getUserForumId( userId: number ): string {
    return `user.${userId}`;
  }

  getUrl( name: any ): string {
    return `${this.getOrigin()}/ws/invitation/${name}/`;
  }

  newForum( forumId: any, onopen?: Function ): Observable<any> {
    const subject = new BehaviorSubject( null );
    const obs     = subject.asObservable();

    this.subjects   [forumId] = subject;
    this.forums     [forumId] = obs;
    this.websockets [forumId] = this.newSocket( forumId, subject, onopen );
    return obs;
  }

  newMessage( forumId: any, message: any ): void {
    message ['token'] = null;
    this.websockets [forumId].send( JSON.stringify( message ) );
  }

  newSocket( name: any, subject: BehaviorSubject<any>, onopen?: any ): WebSocket {
    const url = this.getUrl( name );
    const socket  = new WebSocket( url );

    socket.addEventListener( 'open', () => {
      this._retries = RECONNECT_RETRIES;
    });
    if ( onopen ){
      socket.addEventListener( 'open', onopen );
    }

    socket.onmessage = event => {
      subject.next( event.data );
    }

    socket.onclose = event => {
      console.warn( `Socket closed: ${name}` );
      if ( !this.websockets [name] ){ return; }

      console.warn( event );
      if ( this._retries ){
        setTimeout( () => {
          console.log( `${this._retries} Reconnecting: ${name}...` );
          this.websockets [name] = this.newSocket( name, subject )
          this._retries --;
        }, RECONNECT_INTERVAL );
      } else {
        alert( 'Unable to connect to server!' );
      }
    }

    socket.onerror = event => {
      console.error( `Socket error: ${name}.` );
      console.error( event );
    }
    return socket;
  }

}
