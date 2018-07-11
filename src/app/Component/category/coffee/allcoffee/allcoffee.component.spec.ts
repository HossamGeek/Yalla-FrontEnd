import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcoffeeComponent } from './allcoffee.component';

describe('AllcoffeeComponent', () => {
  let component: AllcoffeeComponent;
  let fixture: ComponentFixture<AllcoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
