import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTypeSelectComponent } from './job-type-select.component';

describe('JobTypeSelectComponent', () => {
  let component: JobTypeSelectComponent;
  let fixture: ComponentFixture<JobTypeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobTypeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
