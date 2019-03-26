import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPaneComponent } from './account-pane.component';

describe('AccountPaneComponent', () => {
  let component: AccountPaneComponent;
  let fixture: ComponentFixture<AccountPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
