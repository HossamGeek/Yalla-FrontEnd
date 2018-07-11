import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrestaurantComponent } from './allrestaurant.component';

describe('AllrestaurantComponent', () => {
  let component: AllrestaurantComponent;
  let fixture: ComponentFixture<AllrestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllrestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
