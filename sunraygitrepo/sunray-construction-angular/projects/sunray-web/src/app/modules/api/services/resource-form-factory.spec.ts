import { TestBed, inject } from '@angular/core/testing';

import { ResourceFormFactory } from './resource-form-factory';

describe('ResourceFormFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourceFormFactory]
    });
  });

  it('should be created', inject([ResourceFormFactory], (service: ResourceFormFactory) => {
    expect(service).toBeTruthy();
  }));
});
