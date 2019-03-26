import { TestBed, inject } from '@angular/core/testing';

import { MenuFactoryService } from './menu-factory.service';

describe('MenuFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuFactoryService]
    });
  });

  it('should be created', inject([MenuFactoryService], (service: MenuFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
