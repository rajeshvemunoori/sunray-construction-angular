import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutoryDocumentComponent } from './statutory-document.component';

describe('StatutoryDocumentComponent', () => {
  let component: StatutoryDocumentComponent;
  let fixture: ComponentFixture<StatutoryDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatutoryDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatutoryDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
