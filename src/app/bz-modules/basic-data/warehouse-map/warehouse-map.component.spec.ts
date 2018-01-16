import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseMapComponent } from './warehouse-map.component';

describe('WarehouseMapComponent', () => {
  let component: WarehouseMapComponent;
  let fixture: ComponentFixture<WarehouseMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
