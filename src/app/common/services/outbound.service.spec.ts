import { TestBed, inject } from '@angular/core/testing';

import { OutboundService } from './outbound.service';

describe('OutboundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutboundService]
    });
  });

  it('should be created', inject([OutboundService], (service: OutboundService) => {
    expect(service).toBeTruthy();
  }));
});
