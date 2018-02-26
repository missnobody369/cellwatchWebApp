import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellwatchNavbarComponent } from './cellwatch-navbar.component';

describe('CellwatchNavbarComponent', () => {
  let component: CellwatchNavbarComponent;
  let fixture: ComponentFixture<CellwatchNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellwatchNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellwatchNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
