import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePaneComponent } from './profile-pane.component';

describe('ProfilePaneComponent', () => {
  let component: ProfilePaneComponent;
  let fixture: ComponentFixture<ProfilePaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
