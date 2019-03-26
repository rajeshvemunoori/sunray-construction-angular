import { TestBed, inject } from '@angular/core/testing';

import { Data.Service } from './data.service.service';

describe('Data.Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Data.Service]
    });
  });

  it('should be created', inject([Data.Service], (service: Data.Service) => {
    expect(service).toBeTruthy();
  }));
});
