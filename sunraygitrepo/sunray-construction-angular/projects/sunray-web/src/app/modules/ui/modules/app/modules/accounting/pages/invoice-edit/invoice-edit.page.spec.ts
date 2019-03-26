import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceEditPage } from './invoice-edit.page';

describe('InvoiceEditPage', () => {
  let component: InvoiceEditPage;
  let fixture: ComponentFixture<InvoiceEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceEditPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
