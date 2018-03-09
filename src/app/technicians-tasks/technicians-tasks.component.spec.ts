import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniciansTasksComponent } from './technicians-tasks.component';

describe('TechniciansTasksComponent', () => {
  let component: TechniciansTasksComponent;
  let fixture: ComponentFixture<TechniciansTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechniciansTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechniciansTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
