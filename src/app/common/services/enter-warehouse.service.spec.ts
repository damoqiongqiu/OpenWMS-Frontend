import { TestBed, inject } from '@angular/core/testing';

import { EnterWarehouseService } from './enter-warehouse.service';

describe('EnterWarehouseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnterWarehouseService]
    });
  });

  it('should be created', inject([EnterWarehouseService], (service: EnterWarehouseService) => {
    expect(service).toBeTruthy();
  }));
});
