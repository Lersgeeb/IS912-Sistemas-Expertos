import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryOrdersListComponent } from './delivery-orders-list.component';

describe('DeliveryOrdersListComponent', () => {
  let component: DeliveryOrdersListComponent;
  let fixture: ComponentFixture<DeliveryOrdersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryOrdersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
