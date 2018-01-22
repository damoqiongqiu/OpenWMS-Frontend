import { TestBed, inject } from '@angular/core/testing';

import { NewInboundReceiptService } from './new-inbound-receipt.service';

describe('NewInboundReceiptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewInboundReceiptService]
    });
  });

  it('should be created', inject([NewInboundReceiptService], (service: NewInboundReceiptService) => {
    expect(service).toBeTruthy();
  }));
});
