import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonMenuPage } from './ion-menu.page';

describe('IonMenuPage', () => {
  let component: IonMenuPage;
  let fixture: ComponentFixture<IonMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
