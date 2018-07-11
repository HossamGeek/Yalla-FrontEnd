import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingStoreComponent } from './setting-store.component';

describe('SettingStoreComponent', () => {
  let component: SettingStoreComponent;
  let fixture: ComponentFixture<SettingStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
