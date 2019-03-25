import { TestBed, inject } from '@angular/core/testing';

import { InboundReceiptDetailService } from './inbound-receipt-detail.service';

describe('InboundReceiptDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InboundReceiptDetailService]
    });
  });

  it('should be created', inject([InboundReceiptDetailService], (service: InboundReceiptDetailService) => {
    expect(service).toBeTruthy();
  }));
});
