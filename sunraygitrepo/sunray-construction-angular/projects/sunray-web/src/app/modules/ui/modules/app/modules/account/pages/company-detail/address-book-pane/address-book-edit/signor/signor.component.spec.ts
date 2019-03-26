import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignorComponent } from './signor.component';

describe('SignorComponent', () => {
  let component: SignorComponent;
  let fixture: ComponentFixture<SignorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
