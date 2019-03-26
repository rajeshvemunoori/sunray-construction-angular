import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTemplatePage } from './document-template.component';

describe('DocumentTemplatePage', () => {
  let component: DocumentTemplatePage;
  let fixture: ComponentFixture<DocumentTemplatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentTemplatePage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTemplatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
