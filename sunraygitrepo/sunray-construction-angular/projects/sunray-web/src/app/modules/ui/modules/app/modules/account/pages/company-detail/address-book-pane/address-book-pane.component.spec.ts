import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookPaneComponent } from './address-book-pane.component';

describe('AddressBookPaneComponent', () => {
  let component: AddressBookPaneComponent;
  let fixture: ComponentFixture<AddressBookPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressBookPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
