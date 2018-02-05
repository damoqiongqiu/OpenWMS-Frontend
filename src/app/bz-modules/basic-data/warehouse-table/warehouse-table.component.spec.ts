import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseTableComponent } from './warehouse-table.component';

describe('WarehouseTableComponent', () => {
  let component: WarehouseTableComponent;
  let fixture: ComponentFixture<WarehouseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
