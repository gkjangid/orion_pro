import { Injectable } from '@angular/core';

export const StoragePrefix: string = 'kuriocities';

export class User {
  email:        string;
  fullName:     string;
  userId:       number;
  userName:     string;
  lastLogin:    number;
  groups?:      string[];
}


@Injectable()
export class SettingsProvider {

  user: User = new User();

  clearUser(): void {
    this.user = new User();
    this.saveSession( 'user', this.user );
  }

  getName( name: string ): string {
    return `${ StoragePrefix }.${ name }`;
  }

  getObject( storage: any, name: string ): any {
    return JSON.parse(
      storage.getItem(
        this.getName( name )
      )
    );
  }

  getSession( name: string ): any {
    return this.getObject( sessionStorage, name );
  }

  getSetting( name: string ): any {
    return this.getObject( localStorage, name );
  }

  saveObject( storage: any, name: string, value: any ): void {
    storage.setItem(
      this.getName( name ),
      JSON.stringify( value ),
    );
  }

  saveSession( name: string, value: any ): void {
    this.saveObject( sessionStorage, name, value );
  }

  saveSetting( name: string, value: any ): void {
    this.saveObject( localStorage, name, value );
  }

}
