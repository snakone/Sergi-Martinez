import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { StorageSettings } from './storage.settings';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  settings: StorageSettings = <StorageSettings>{};

  constructor(private platform: Platform,
              private storage: Storage) {}

  loadStorage(): Promise<StorageSettings> {
    return new Promise (res => {
      if (this.platform.is('cordova')) {
        this.storage.ready().then(() => {
          this.storage.get('settings')
            .then((value: StorageSettings) => {
              if (value) {
                this.settings = value;
              }
              res(this.settings);
            });
        });
      } else {
        if (localStorage.getItem('settings')) {
          this.settings = JSON.parse(localStorage.getItem('settings'));
          res(this.settings);
        }
      }
    });
  }

  saveStorage(): void {
    if (this.platform.is('cordova')) {
      this.storage.ready().then(() => {
        this.storage.set('settings', this.settings)
         .then(value => {
           this.settings = value;
         });
      });
    } else {
      localStorage.setItem('settings', JSON.stringify(this.settings));
    }
  }

}


