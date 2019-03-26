import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTemplatePaneComponent } from './document-template-pane.component';

describe('DocumentTemplatePaneComponent', () => {
  let component: DocumentTemplatePaneComponent;
  let fixture: ComponentFixture<DocumentTemplatePaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentTemplatePaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTemplatePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
