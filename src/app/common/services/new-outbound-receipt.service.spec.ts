import { TestBed, inject } from '@angular/core/testing';

import { NewOutboundReceiptService } from './new-outbound-receipt.service';

describe('NewOutboundReceiptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewOutboundReceiptService]
    });
  });

  it('should be created', inject([NewOutboundReceiptService], (service: NewOutboundReceiptService) => {
    expect(service).toBeTruthy();
  }));
});
