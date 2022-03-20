import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DataScienceComponent } from './data-science.component';

describe('DataScienceComponent', () => {
  let component: DataScienceComponent;
  let fixture: ComponentFixture<DataScienceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DataScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
