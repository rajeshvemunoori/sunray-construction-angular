import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailPage } from './project-detail.page';

describe('ProjectDetailPage', () => {
  let component: ProjectDetailPage;
  let fixture: ComponentFixture<ProjectDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
