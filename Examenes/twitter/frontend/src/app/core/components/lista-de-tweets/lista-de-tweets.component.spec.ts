import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeTweetsComponent } from './lista-de-tweets.component';

describe('ListaDeTweetsComponent', () => {
  let component: ListaDeTweetsComponent;
  let fixture: ComponentFixture<ListaDeTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
