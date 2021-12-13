import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularBusinessComponent } from './popular-business.component';

describe('PopularBusinessComponent', () => {
  let component: PopularBusinessComponent;
  let fixture: ComponentFixture<PopularBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
