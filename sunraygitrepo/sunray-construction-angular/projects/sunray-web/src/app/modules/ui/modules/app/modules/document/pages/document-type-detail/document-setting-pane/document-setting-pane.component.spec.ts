import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSettingPaneComponent } from './document-setting-pane.component';

describe('DocumentSettingPaneComponent', () => {
  let component: DocumentSettingPaneComponent;
  let fixture: ComponentFixture<DocumentSettingPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentSettingPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSettingPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
