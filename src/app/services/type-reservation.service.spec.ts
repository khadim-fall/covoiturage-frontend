import { TestBed } from '@angular/core/testing';

import { TypeReservationService } from './type-reservation.service';

describe('TypeReservationService', () => {
  let service: TypeReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
