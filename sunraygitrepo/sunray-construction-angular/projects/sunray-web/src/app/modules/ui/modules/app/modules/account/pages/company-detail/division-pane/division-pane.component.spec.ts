import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionPaneComponent } from './division-pane.component';

describe('DivisionPaneComponent', () => {
  let component: DivisionPaneComponent;
  let fixture: ComponentFixture<DivisionPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
