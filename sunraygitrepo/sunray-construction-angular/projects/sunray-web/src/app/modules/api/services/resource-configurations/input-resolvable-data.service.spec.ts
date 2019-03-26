import { TestBed, inject } from '@angular/core/testing';

import { InputResolvableData.ServiceService } from './input-resolvable-data.service.service';

describe('InputResolvableData.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputResolvableData.ServiceService]
    });
  });

  it('should be created', inject([InputResolvableData.ServiceService], (service: InputResolvableData.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
