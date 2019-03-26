import { TestBed, inject } from '@angular/core/testing';

import { BaseProviderService } from './base-provider.service';

describe('BaseProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseProviderService]
    });
  });

  it('should be created', inject([BaseProviderService], (service: BaseProviderService) => {
    expect(service).toBeTruthy();
  }));
});
