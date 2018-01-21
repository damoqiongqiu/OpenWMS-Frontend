import { TestBed, inject } from '@angular/core/testing';

import { OutboundReceiptService } from './outbound-receipt.service';

describe('OutboundReceiptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutboundReceiptService]
    });
  });

  it('should be created', inject([OutboundReceiptService], (service: OutboundReceiptService) => {
    expect(service).toBeTruthy();
  }));
});
