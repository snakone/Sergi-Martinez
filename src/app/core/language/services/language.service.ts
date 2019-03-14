import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG, AppConfig } from '@app/app.config';
import { StorageService } from '@app/shared/storage/storage.service';

@Injectable()
export class LanguageService {

  constructor(private translateService: TranslateService,
              private storage: StorageService,
    @Inject(APP_CONFIG) private appConfig: AppConfig) {
    this.setDefault();
  }

  private setDefault() {
    if (!this.translateService.getDefaultLang()) {
      this.translateService.setDefaultLang(this.appConfig.DEFAULT_LANGUAGE);
    }
    this.translateService.use(this.storage.settings.lang || this.appConfig.DEFAULT_LANGUAGE);
  }

  public change(lang: string) {
    this.translateService.use(lang);
    this.storage.settings.lang = lang;
    this.storage.saveStorage();
  }

  public getCurrent(): string {
    return this.translateService.currentLang;
  }
}
