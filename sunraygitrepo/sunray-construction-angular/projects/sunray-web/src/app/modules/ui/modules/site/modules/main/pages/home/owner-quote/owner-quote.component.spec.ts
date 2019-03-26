import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerQuoteComponent } from './owner-quote.component';

describe('OwnerQuoteComponent', () => {
  let component: OwnerQuoteComponent;
  let fixture: ComponentFixture<OwnerQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
