import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRoleDeadlinesComponent } from './project-role-deadlines.component';

describe('ProjectRoleDeadlinesComponent', () => {
  let component: ProjectRoleDeadlinesComponent;
  let fixture: ComponentFixture<ProjectRoleDeadlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRoleDeadlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRoleDeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
