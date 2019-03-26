import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableMapComponent } from './clickable-map.component';

describe('ClickableMapComponent', () => {
  let component: ClickableMapComponent;
  let fixture: ComponentFixture<ClickableMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickableMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
