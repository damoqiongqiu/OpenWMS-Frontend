import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryItemDetailComponent } from './inventory-item-detail.component';

describe('InventoryItemDetailComponent', () => {
  let component: InventoryItemDetailComponent;
  let fixture: ComponentFixture<InventoryItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryItemDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
