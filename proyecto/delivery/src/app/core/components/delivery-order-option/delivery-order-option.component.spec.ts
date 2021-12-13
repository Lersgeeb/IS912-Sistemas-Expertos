import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryOrderOptionComponent } from './delivery-order-option.component';

describe('DeliveryOrderOptionComponent', () => {
  let component: DeliveryOrderOptionComponent;
  let fixture: ComponentFixture<DeliveryOrderOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryOrderOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryOrderOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
