import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountInputModalComponent } from './amount-input-modal.component';

describe('AmountInputModalComponent', () => {
  let component: AmountInputModalComponent;
  let fixture: ComponentFixture<AmountInputModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountInputModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountInputModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
