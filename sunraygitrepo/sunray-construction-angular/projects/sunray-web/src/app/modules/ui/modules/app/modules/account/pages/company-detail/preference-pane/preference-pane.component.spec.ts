import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencePaneComponent } from './preference-pane.component';

describe('PreferencePaneComponent', () => {
  let component: PreferencePaneComponent;
  let fixture: ComponentFixture<PreferencePaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferencePaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferencePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
