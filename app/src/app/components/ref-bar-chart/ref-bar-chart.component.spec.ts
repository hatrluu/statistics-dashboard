import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefBarChartComponent } from './ref-bar-chart.component';

describe('RefBarChartComponent', () => {
  let component: RefBarChartComponent;
  let fixture: ComponentFixture<RefBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
