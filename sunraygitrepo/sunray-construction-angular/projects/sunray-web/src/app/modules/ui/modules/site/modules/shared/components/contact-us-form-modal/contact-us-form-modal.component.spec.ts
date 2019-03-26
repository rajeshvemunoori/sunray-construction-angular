import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsFormModalComponent } from './contact-us-form-modal.component';

describe('ContactUsFormModalComponent', () => {
  let component: ContactUsFormModalComponent;
  let fixture: ComponentFixture<ContactUsFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
