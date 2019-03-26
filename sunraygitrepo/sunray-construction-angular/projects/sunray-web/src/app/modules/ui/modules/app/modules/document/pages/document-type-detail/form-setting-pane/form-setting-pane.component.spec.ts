import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSettingPaneComponent } from './form-setting-pane.component';

describe('FormSettingPaneComponent', () => {
  let component: FormSettingPaneComponent;
  let fixture: ComponentFixture<FormSettingPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSettingPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSettingPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
