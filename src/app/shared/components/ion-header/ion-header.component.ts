import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ion-header',
  templateUrl: './ion-header.component.html',
  styleUrls: ['./ion-header.component.scss'],
})

export class IonHeaderComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
