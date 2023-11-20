import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTrajetComponent } from './type-trajet.component';

describe('TypeTrajetComponent', () => {
  let component: TypeTrajetComponent;
  let fixture: ComponentFixture<TypeTrajetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeTrajetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeTrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
