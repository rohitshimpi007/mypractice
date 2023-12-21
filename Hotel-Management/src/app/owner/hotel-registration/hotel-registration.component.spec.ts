import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRegistrationComponent } from './hotel-registration.component';

describe('HotelRegistrationComponent', () => {
  let component: HotelRegistrationComponent;
  let fixture: ComponentFixture<HotelRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelRegistrationComponent]
    });
    fixture = TestBed.createComponent(HotelRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
