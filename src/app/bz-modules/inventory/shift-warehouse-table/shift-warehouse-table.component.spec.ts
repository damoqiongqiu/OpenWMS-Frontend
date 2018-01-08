import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftWarehouseTableComponent } from './shift-warehouse-table.component';

describe('ShiftWarehouseTableComponent', () => {
  let component: ShiftWarehouseTableComponent;
  let fixture: ComponentFixture<ShiftWarehouseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftWarehouseTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftWarehouseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
