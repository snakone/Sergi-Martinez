import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CORE_MODULE_CONFIG, CORE_MODULE_CONSTANTS } from '@app/core/core.module.config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LanguageModule } from '@app/core/language/language.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    CORE_MODULE_CONSTANTS.TRANSLATE_CONFIG.I18N_PATH,
    CORE_MODULE_CONSTANTS.TRANSLATE_CONFIG.SUFFIX_FILE
  );
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    LanguageModule.forRoot(),
  ],
  declarations: [],
  providers: [
    { provide: CORE_MODULE_CONFIG, useValue: CORE_MODULE_CONSTANTS }
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
