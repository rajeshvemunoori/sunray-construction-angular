import { TestBed, inject } from '@angular/core/testing';

import { ActionAuthorizerService } from './action-authorizer.service';

describe('ActionAuthorizerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActionAuthorizerService]
    });
  });

  it('should be created', inject([ActionAuthorizerService], (service: ActionAuthorizerService) => {
    expect(service).toBeTruthy();
  }));
});
