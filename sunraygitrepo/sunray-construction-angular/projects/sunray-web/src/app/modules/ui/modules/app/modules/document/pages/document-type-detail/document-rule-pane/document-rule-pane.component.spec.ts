import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentRulePaneComponent } from './document-rule-pane.component';

describe('DocumentRulePaneComponent', () => {
  let component: DocumentRulePaneComponent;
  let fixture: ComponentFixture<DocumentRulePaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentRulePaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentRulePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
