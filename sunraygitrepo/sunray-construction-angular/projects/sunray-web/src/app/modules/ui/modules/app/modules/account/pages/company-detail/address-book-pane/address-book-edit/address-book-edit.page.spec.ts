import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookEditComponent } from './address-book-edit.component';

describe('AddressBookEditComponent', () => {
  let component: AddressBookEditComponent;
  let fixture: ComponentFixture<AddressBookEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressBookEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
