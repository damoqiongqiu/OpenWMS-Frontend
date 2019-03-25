import { TestBed, inject } from '@angular/core/testing';

import { WarehouseService } from './warehouse.service';

describe('WarehouseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WarehouseService]
    });
  });

  it('should be created', inject([WarehouseService], (service: WarehouseService) => {
    expect(service).toBeTruthy();
  }));
});
