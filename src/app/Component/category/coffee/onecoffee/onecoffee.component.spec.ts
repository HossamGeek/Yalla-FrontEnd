import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecoffeeComponent } from './onecoffee.component';

describe('OnecoffeeComponent', () => {
  let component: OnecoffeeComponent;
  let fixture: ComponentFixture<OnecoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnecoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnecoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
