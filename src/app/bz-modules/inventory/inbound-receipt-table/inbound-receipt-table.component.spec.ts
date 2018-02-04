import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundReceiptTableComponent } from './inbound-receipt-table.component';

describe('InboundReceiptTableComponent', () => {
  let component: InboundReceiptTableComponent;
  let fixture: ComponentFixture<InboundReceiptTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InboundReceiptTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundReceiptTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
