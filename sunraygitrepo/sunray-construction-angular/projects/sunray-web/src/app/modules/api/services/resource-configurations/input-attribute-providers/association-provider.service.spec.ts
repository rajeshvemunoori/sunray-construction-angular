import { TestBed, inject } from '@angular/core/testing';

import { AssociationProviderService } from './association-provider.service';

describe('AssociationProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssociationProviderService]
    });
  });

  it('should be created', inject([AssociationProviderService], (service: AssociationProviderService) => {
    expect(service).toBeTruthy();
  }));
});
