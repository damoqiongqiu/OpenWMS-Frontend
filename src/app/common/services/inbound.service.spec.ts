import { TestBed, inject } from '@angular/core/testing';

import { InboundService } from './inbound.service';

describe('InboundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InboundService]
    });
  });

  it('should be created', inject([InboundService], (service: InboundService) => {
    expect(service).toBeTruthy();
  }));
});
