import { TestBed, inject } from '@angular/core/testing';

import { ProfilePaneService } from './account-pane.service';

describe('ProfilePaneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfilePaneService]
    });
  });

  it('should be created', inject([ProfilePaneService], (service: ProfilePaneService) => {
    expect(service).toBeTruthy();
  }));
});
