import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedDeliversManComponent } from './accepted-delivers-man.component';

describe('AcceptedDeliversManComponent', () => {
  let component: AcceptedDeliversManComponent;
  let fixture: ComponentFixture<AcceptedDeliversManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedDeliversManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedDeliversManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
