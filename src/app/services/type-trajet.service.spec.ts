import { TestBed } from '@angular/core/testing';

import { TypeTrajetService } from './type-trajet.service';

describe('TypeTrajetService', () => {
  let service: TypeTrajetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeTrajetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
