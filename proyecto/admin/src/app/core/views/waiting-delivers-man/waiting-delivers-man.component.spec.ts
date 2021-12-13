import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingDeliversManComponent } from './waiting-delivers-man.component';

describe('WaitingDeliversManComponent', () => {
  let component: WaitingDeliversManComponent;
  let fixture: ComponentFixture<WaitingDeliversManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingDeliversManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingDeliversManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
