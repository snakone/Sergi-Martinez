import { Injectable } from '@angular/core';

@Injectable()

export class SelectLanguageService {

  languages: Language[];
  path = '../../../../assets/langs';

  constructor() {
    this.languages = [
      { lang: 'es', img: `${this.path}/es.png` },
      { lang: 'ca', img: `${this.path}/ca.png` },
      { lang: 'en', img: `${this.path}/en.png` }
    ];
   }

  public getLanguages(): Language[] {
    return this.languages;
  }
}

export interface Language {
  lang: string;
  img: string;
}
