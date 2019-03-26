import { TestBed, inject } from '@angular/core/testing';

import { AttributeProviderService } from './attribute-provider.service';

describe('AttributeProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttributeProviderService]
    });
  });

  it('should be created', inject([AttributeProviderService], (service: AttributeProviderService) => {
    expect(service).toBeTruthy();
  }));
});
