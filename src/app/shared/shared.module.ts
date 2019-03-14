import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageModule } from '@app/core/language/language.module';
import { SelectLanguageService } from './components/language-selector/services/select-language.service';
import { RouterModule } from '@angular/router';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { IonHeaderComponent } from './components/ion-header/ion-header.component';
import { IonicModule } from '@ionic/angular';
import { IonMenuComponent } from './components/ion-menu/ion-menu.component';
import { IonMenuService } from './services/ion-menu/ion-menu.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    LanguageModule,
    RouterModule,
    IonicModule.forRoot()
  ],
  declarations: [
    IonHeaderComponent,
    IonMenuComponent,
    LanguageSelectorComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    LanguageModule,
    RouterModule,
    IonMenuComponent,
    IonHeaderComponent,
    LanguageSelectorComponent
  ],
  providers: [
    SelectLanguageService,
    IonMenuService
  ]
})
export class SharedModule { }
