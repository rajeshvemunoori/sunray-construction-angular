import { TestBed, inject } from '@angular/core/testing';

import { InputControlDataValidatorFactoryService } from './input-control-data-validator-factory.service';

describe('InputControlDataValidatorFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputControlDataValidatorFactoryService]
    });
  });

  it('should be created', inject([InputControlDataValidatorFactoryService], (service: InputControlDataValidatorFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
