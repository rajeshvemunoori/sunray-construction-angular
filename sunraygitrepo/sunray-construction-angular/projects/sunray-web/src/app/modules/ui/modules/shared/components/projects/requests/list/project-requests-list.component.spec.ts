import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRequestsListComponent } from './project-requests-list.component';

describe('ProjectRequestsListComponent', () => {
  let component: ProjectRequestsListComponent;
  let fixture: ComponentFixture<ProjectRequestsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRequestsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
