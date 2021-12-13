import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedDeliveryComponent } from './assigned-delivery.component';

describe('AssignedDeliveryComponent', () => {
  let component: AssignedDeliveryComponent;
  let fixture: ComponentFixture<AssignedDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
