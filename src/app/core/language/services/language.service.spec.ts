import { TestBed } from '@angular/core/testing';

import { LanguageService } from '@app/core/language/services/language.service';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {LANGUAGE_MODULE_CONFIG, LANGUAGE_MODULE_CONSTANTS} from '@app/core/language/language.module.config';
import {APP_CONFIG, APP_CONSTANTS} from '@app/app.config';

describe('Language Service', () => {
  let languageService;
  let translateService;
  let languageModuleConfig;
  let spies;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        TranslateService,
        LanguageService,
        {provide: APP_CONFIG, useValue: APP_CONSTANTS},
        {provide: LANGUAGE_MODULE_CONFIG, useValue: LANGUAGE_MODULE_CONSTANTS},
      ]
    });
  });

  beforeEach(() => {
    languageModuleConfig = TestBed.get(LANGUAGE_MODULE_CONFIG);
    languageService = TestBed.get(LanguageService);
    translateService = TestBed.get(TranslateService);
  });

  beforeEach(() => {
    loadSpies();
  });

  describe('load', () => {
    it('should load service ', () => {
      expect(languageService).toBeDefined();
    });
  });

  describe('change', () => {
    it('should change language when the method change is clicked ', () => {
      languageService.change('en');
      expect(spies.translateService.use).toHaveBeenCalledWith('en');
    });
  });

  describe('get current language', () => {
    it('should get current language from translate service', function () {
      translateService.currentLang = 'currentLang';
      const currentLanguage = languageService.getCurrent();
      expect(currentLanguage).toBe('currentLang');
    });
  });

  // TODO mock @LocalStorage to cover all cases
  describe('set default language', () => {
    it('should set default language if is not set and call translate service to use it', function () {
      languageService.setDefault();
      expect(spies.translateService.use).toHaveBeenCalled();
    });

    it('should call translate service use with localStorageCurrentLanguage value', function () {
      spies.translateService.getDefaultLang.and.returnValue(true);
      languageService.setDefault();
      expect(spies.translateService.setDefaultLang).not.toHaveBeenCalled();
      expect(spies.translateService.use).toHaveBeenCalled();
    });
  });

  function loadSpies() {
    spies = {
      translateService: {
        use: spyOn(translateService, 'use'),
        getDefaultLang: spyOn(translateService, 'getDefaultLang'),
        setDefaultLang: spyOn(translateService, 'setDefaultLang')
      }
    };
  }
});
