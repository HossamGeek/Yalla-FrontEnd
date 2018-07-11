import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginstoreComponent } from './loginstore.component';

describe('LoginstoreComponent', () => {
  let component: LoginstoreComponent;
  let fixture: ComponentFixture<LoginstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
