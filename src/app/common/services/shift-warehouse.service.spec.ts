import { TestBed, inject } from '@angular/core/testing';

import { ShiftWarehouseService } from './shift-warehouse.service';

describe('ShiftWarehouseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShiftWarehouseService]
    });
  });

  it('should be created', inject([ShiftWarehouseService], (service: ShiftWarehouseService) => {
    expect(service).toBeTruthy();
  }));
});
