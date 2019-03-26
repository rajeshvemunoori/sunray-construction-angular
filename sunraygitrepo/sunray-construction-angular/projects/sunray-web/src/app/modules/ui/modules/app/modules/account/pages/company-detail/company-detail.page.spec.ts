import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailPage } from './company-detail.page';

describe('CompanyDetailPage', () => {
  let component: CompanyDetailPage;
  let fixture: ComponentFixture<CompanyDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDetailPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
