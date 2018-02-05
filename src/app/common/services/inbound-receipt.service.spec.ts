import { TestBed, inject } from '@angular/core/testing';

import { InboundReceiptService } from './inbound-receipt.service';

describe('InboundReceiptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InboundReceiptService]
    });
  });

  it('should be created', inject([InboundReceiptService], (service: InboundReceiptService) => {
    expect(service).toBeTruthy();
  }));
});
