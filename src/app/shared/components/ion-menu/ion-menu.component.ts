import { Component, OnInit } from '@angular/core';
import { AppPage, IonMenuService } from '@app/shared/services/ion-menu/ion-menu.service';

@Component({
  selector: 'app-ion-menu',
  templateUrl: './ion-menu.component.html',
  styleUrls: ['./ion-menu.component.scss'],
})

export class IonMenuComponent implements OnInit {

  appPages: AppPage[];
  IntroSlides = false;

  constructor(private menuData: IonMenuService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems(): void {
    this.appPages = this.menuData.getAppPages();
  }

}
