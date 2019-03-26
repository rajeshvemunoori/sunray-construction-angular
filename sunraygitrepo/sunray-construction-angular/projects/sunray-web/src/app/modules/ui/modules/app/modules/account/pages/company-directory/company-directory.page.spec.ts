import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDirectoryPage } from './company-directory.page';

describe('CompanyDirectoryPage', () => {
  let component: CompanyDirectoryPage;
  let fixture: ComponentFixture<CompanyDirectoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDirectoryPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDirectoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
