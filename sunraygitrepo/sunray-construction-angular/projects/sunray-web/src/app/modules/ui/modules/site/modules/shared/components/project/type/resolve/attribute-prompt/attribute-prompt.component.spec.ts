import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributePromptComponent } from './attribute-prompt.component';

describe('AttributePromptComponent', () => {
  let component: AttributePromptComponent;
  let fixture: ComponentFixture<AttributePromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributePromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
