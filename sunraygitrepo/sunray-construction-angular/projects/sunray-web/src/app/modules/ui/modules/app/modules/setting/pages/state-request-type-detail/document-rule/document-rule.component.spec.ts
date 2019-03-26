import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalInfoPaneComponent } from './additional-info-pane.component';

describe('AdditionalInfoPaneComponent', () => {
  let component: AdditionalInfoPaneComponent;
  let fixture: ComponentFixture<AdditionalInfoPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalInfoPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalInfoPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
