import { TestBed } from '@angular/core/testing';

import { CategoriePermisService } from './categorie-permis.service';

describe('CategoriePermisService', () => {
  let service: CategoriePermisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriePermisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
