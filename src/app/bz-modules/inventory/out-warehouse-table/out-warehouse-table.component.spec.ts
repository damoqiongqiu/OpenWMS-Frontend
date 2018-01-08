import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutWarehouseTableComponent } from './out-warehouse-table.component';

describe('OutWarehouseTableComponent', () => {
  let component: OutWarehouseTableComponent;
  let fixture: ComponentFixture<OutWarehouseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutWarehouseTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutWarehouseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
