import { TestBed, inject } from '@angular/core/testing';

import { FormFieldFactoryService } from './form-field-factory.service';

describe('FormFieldFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormFieldFactoryService]
    });
  });

  it('should be created', inject([FormFieldFactoryService], (service: FormFieldFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
