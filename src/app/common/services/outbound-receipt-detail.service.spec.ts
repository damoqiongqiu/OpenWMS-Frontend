import { TestBed, inject } from '@angular/core/testing';

import { OutboundReceiptDetailService } from './outbound-receipt-detail.service';

describe('OutboundReceiptDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutboundReceiptDetailService]
    });
  });

  it('should be created', inject([OutboundReceiptDetailService], (service: OutboundReceiptDetailService) => {
    expect(service).toBeTruthy();
  }));
});
