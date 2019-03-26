import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPaidButtonComponent } from './get-paid-button.component';

describe('GetPaidButtonComponent', () => {
  let component: GetPaidButtonComponent;
  let fixture: ComponentFixture<GetPaidButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPaidButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPaidButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
