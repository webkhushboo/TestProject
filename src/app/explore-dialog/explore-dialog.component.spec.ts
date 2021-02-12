import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreDialogComponent } from './explore-dialog.component';

describe('ExploreDialogComponent', () => {
  let component: ExploreDialogComponent;
  let fixture: ComponentFixture<ExploreDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
