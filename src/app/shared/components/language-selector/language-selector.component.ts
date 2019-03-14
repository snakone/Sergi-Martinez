import { Component, OnInit } from '@angular/core';
import { SelectLanguageService, Language } from './services/select-language.service';
import { LanguageService } from '@app/core/language/services/language.service';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})

export class LanguageSelectorComponent implements OnInit {

  languages: Language[];

  constructor(private selectLanguageService: SelectLanguageService,
              private languageService: LanguageService,
              private menu: MenuController) { }

  ngOnInit() {
    this.getLanguages();
  }

  private getLanguages(): void {
    this.languages = this.selectLanguageService.getLanguages();
  }

  public setLanguage(lang: string): void {
    this.languageService.change(lang);
    this.menu.close();
  }

}

