import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundReceiptTableComponent } from './outbound-receipt-table.component';

describe('OutboundReceiptTableComponent', () => {
  let component: OutboundReceiptTableComponent;
  let fixture: ComponentFixture<OutboundReceiptTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundReceiptTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundReceiptTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
