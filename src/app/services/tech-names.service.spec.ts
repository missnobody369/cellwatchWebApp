import { TestBed, inject } from '@angular/core/testing';

import { TechNamesService } from './tech-names.service';

describe('TechNamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechNamesService]
    });
  });

  it('should be created', inject([TechNamesService], (service: TechNamesService) => {
    expect(service).toBeTruthy();
  }));
});
