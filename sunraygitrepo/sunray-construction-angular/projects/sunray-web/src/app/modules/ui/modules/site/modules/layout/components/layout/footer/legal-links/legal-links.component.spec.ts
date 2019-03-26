import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalLinksComponent } from './legal-links.component';

describe('LegalLinksComponent', () => {
  let component: LegalLinksComponent;
  let fixture: ComponentFixture<LegalLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
