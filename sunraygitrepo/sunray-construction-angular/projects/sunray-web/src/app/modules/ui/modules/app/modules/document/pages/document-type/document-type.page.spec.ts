import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTypePage } from './document-type.page';

describe('DocumentTypePage', () => {
  let component: DocumentTypePage;
  let fixture: ComponentFixture<DocumentTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentTypePage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
