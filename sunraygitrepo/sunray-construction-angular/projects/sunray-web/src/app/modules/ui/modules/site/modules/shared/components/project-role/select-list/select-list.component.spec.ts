import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRoleSelectComponent } from './project-role-select.component';

describe('ProjectRoleSelectComponent', () => {
  let component: ProjectRoleSelectComponent;
  let fixture: ComponentFixture<ProjectRoleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRoleSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRoleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
