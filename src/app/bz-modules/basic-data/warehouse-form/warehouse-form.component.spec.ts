import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseFormComponent } from './warehouse-form.component';

describe('WarehouseFormComponent', () => {
  let component: WarehouseFormComponent;
  let fixture: ComponentFixture<WarehouseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
