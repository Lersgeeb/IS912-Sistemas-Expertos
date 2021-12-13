import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPickedInvoiceComponent } from './order-picked-invoice.component';

describe('OrderPickedInvoiceComponent', () => {
  let component: OrderPickedInvoiceComponent;
  let fixture: ComponentFixture<OrderPickedInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPickedInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPickedInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
