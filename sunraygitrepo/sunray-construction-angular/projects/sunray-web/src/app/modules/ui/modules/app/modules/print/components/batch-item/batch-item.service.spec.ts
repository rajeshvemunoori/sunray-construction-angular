import { TestBed, inject } from '@angular/core/testing';

import { BatchItemService } from './batch-item.service';

describe('BatchItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BatchItemService]
    });
  });

  it('should be created', inject([BatchItemService], (service: BatchItemService) => {
    expect(service).toBeTruthy();
  }));
});
