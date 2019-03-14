import { Component, OnInit, ViewChild } from '@angular/core';
import { SLIDES, SLIDER_OPTIONS } from './slides.data';
import { IonSlides, NavController, MenuController } from '@ionic/angular';
import { StorageService } from '@app/shared/storage/storage.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss']
})

export class IntroPage implements OnInit {

  @ViewChild('slider') slider: IonSlides;
  slides: any[] = SLIDES;
  sliderOptions = SLIDER_OPTIONS;
  index: number;
  checkbox = true;

  constructor(private nav: NavController,
              private storage: StorageService,
              private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  ionViewDidEnter(): void {
    this.menuCtrl.enable(false);
  }

  ionViewDidLeave(): void {
    this.menuCtrl.enable(true);
  }

  async getIndex() {
    this.index = await this.slider.getActiveIndex();
  }

  goToSkip(): void {
    this.slider.slideTo(this.slides.length);
  }

  goToStart(): void {
    this.slider.slideTo(0);
  }

  goHome(): void {
    this.storage.settings.intro = !this.checkbox;
    this.storage.saveStorage();
    this.nav.setDirection('root');
    this.nav.navigateRoot('/home');
  }

}
