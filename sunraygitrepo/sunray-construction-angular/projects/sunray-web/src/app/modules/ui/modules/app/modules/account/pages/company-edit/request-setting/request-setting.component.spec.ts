import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSettingComponent } from './request-setting.component';

describe('RequestSettingComponent', () => {
  let component: RequestSettingComponent;
  let fixture: ComponentFixture<RequestSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
