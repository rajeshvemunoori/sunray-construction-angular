import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePaneComponent } from './invoice-pane.component';

describe('InvoicePaneComponent', () => {
  let component: InvoicePaneComponent;
  let fixture: ComponentFixture<InvoicePaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicePaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
