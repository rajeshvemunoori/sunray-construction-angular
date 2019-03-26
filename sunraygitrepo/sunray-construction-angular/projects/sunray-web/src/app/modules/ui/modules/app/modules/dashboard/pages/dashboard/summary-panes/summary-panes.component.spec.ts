import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPanesComponent } from './summary-panes.component';

describe('SummaryPanesComponent', () => {
  let component: SummaryPanesComponent;
  let fixture: ComponentFixture<SummaryPanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryPanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryPanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
