import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenge5Component } from './challenge5.component';

describe('Challenge5Component', () => {
  let component: Challenge5Component;
  let fixture: ComponentFixture<Challenge5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Challenge5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Challenge5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
