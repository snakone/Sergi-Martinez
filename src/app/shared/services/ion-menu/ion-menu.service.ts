import { Injectable } from '@angular/core';
import { appPages } from './ion-menu-data';

@Injectable()

export class IonMenuService {

  constructor() { }

  getAppPages(): AppPage[] {
    return appPages;
  }

}

export interface AppPage {
  title: string;
  url: string;
  icon: string;
}


