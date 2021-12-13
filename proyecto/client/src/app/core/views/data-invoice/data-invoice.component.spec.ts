import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInvoiceComponent } from './data-invoice.component';

describe('DataInvoiceComponent', () => {
  let component: DataInvoiceComponent;
  let fixture: ComponentFixture<DataInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
