import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryPanesComponent } from './primary-panes.component';

describe('PrimaryPanesComponent', () => {
  let component: PrimaryPanesComponent;
  let fixture: ComponentFixture<PrimaryPanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryPanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryPanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
