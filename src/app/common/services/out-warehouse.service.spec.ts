import { TestBed, inject } from '@angular/core/testing';

import { OutWarehouseService } from './out-warehouse.service';

describe('OutWarehouseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutWarehouseService]
    });
  });

  it('should be created', inject([OutWarehouseService], (service: OutWarehouseService) => {
    expect(service).toBeTruthy();
  }));
});
