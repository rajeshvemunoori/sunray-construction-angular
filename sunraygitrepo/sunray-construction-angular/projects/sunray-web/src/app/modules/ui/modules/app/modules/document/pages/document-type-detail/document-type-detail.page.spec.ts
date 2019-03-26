import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTypeDetailPage } from './document-type-detail.page';

describe('DocumentTypeDetailPage', () => {
  let component: DocumentTypeDetailPage;
  let fixture: ComponentFixture<DocumentTypeDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentTypeDetailPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTypeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
