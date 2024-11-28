import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersAddComponent } from './offers-add.component';

describe('OffersAddComponent', () => {
  let component: OffersAddComponent;
  let fixture: ComponentFixture<OffersAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffersAddComponent]
    });
    fixture = TestBed.createComponent(OffersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
