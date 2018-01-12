import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryItemFormComponent } from './inventory-item-form.component';

describe('InventoryItemFormComponent', () => {
  let component: InventoryItemFormComponent;
  let fixture: ComponentFixture<InventoryItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
