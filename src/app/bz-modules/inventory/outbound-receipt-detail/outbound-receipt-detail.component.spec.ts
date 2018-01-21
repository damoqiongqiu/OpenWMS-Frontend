import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundReceiptDetailComponent } from './outbound-receipt-detail.component';

describe('OutboundReceiptDetailComponent', () => {
  let component: OutboundReceiptDetailComponent;
  let fixture: ComponentFixture<OutboundReceiptDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundReceiptDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundReceiptDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
