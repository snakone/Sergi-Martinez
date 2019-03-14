import { TestBed } from '@angular/core/testing';

import { IonMenuService } from './ion-menu.service';

describe('IonMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IonMenuService = TestBed.get(IonMenuService);
    expect(service).toBeTruthy();
  });
});
