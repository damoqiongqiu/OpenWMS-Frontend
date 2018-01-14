import { TestBed, inject } from '@angular/core/testing';

import { WarehouseLossService } from './warehouse-loss.service';

describe('WarehouseLossService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WarehouseLossService]
    });
  });

  it('should be created', inject([WarehouseLossService], (service: WarehouseLossService) => {
    expect(service).toBeTruthy();
  }));
});
