import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorecontentComponent } from './storecontent.component';

describe('StorecontentComponent', () => {
  let component: StorecontentComponent;
  let fixture: ComponentFixture<StorecontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorecontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
