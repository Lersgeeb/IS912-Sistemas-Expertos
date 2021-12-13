import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessOptionComponent } from './business-option.component';

describe('BusinessOptionComponent', () => {
  let component: BusinessOptionComponent;
  let fixture: ComponentFixture<BusinessOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
