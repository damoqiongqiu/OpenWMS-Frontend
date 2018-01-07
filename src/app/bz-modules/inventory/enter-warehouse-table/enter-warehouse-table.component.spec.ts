import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterWarehouseTableComponent } from './enter-warehouse-table.component';

describe('EnterWarehouseTableComponent', () => {
  let component: EnterWarehouseTableComponent;
  let fixture: ComponentFixture<EnterWarehouseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterWarehouseTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterWarehouseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
