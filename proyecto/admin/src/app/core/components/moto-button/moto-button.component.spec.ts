import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoButtonComponent } from './moto-button.component';

describe('MotoButtonComponent', () => {
  let component: MotoButtonComponent;
  let fixture: ComponentFixture<MotoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
