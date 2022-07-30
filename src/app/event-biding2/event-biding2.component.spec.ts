import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBiding2Component } from './event-biding2.component';

describe('EventBiding2Component', () => {
  let component: EventBiding2Component;
  let fixture: ComponentFixture<EventBiding2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBiding2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBiding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
