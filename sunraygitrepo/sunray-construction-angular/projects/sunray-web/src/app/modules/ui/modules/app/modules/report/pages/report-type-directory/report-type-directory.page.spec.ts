import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTypeDirectoryPage } from './report-type-directory.page';

describe('ReportTypeDirectoryPage', () => {
  let component: ReportTypeDirectoryPage;
  let fixture: ComponentFixture<ReportTypeDirectoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportTypeDirectoryPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTypeDirectoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
