import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryPage } from './directory.page';

describe('DirectoryPage', () => {
  let component: DirectoryPage;
  let fixture: ComponentFixture<DirectoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
