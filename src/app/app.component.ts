import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './shared/storage/storage.service';
import { StorageSettings } from './shared/storage/storage.settings';
import { Router } from '@angular/router';

import { timer } from 'rxjs';
import { APP_CONSTANTS } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  showSplash = true;
  version = '0.0.1-public'

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private storage: StorageService,
    private router: Router
  ) {
    this.initializeApp();
    this.loadStorage();
    this.translateApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();

      timer(3000).subscribe(() => {
        this.showSplash = false;
      });
    });
  }

  loadStorage(): void {
    this.storage.loadStorage()
    .then((res: StorageSettings) => {
       if (res.intro) {
         this.router.navigateByUrl('/intro');
       } else {
        this.router.navigateByUrl('/home');
       }
    })
    .catch(err => {
      console.log(JSON.stringify(err));
      this.router.navigateByUrl('/intro');
    });
  }

  translateApp(): void {
    if (this.storage.settings.lang) {
      this.translate.use(this.storage.settings.lang);
    } else { 
      this.translate.use(APP_CONSTANTS.DEFAULT_LANGUAGE);
    }
  }

}
