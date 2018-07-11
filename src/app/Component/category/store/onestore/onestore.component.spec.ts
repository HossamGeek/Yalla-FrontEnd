import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnestoreComponent } from './onestore.component';

describe('OnestoreComponent', () => {
  let component: OnestoreComponent;
  let fixture: ComponentFixture<OnestoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnestoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
