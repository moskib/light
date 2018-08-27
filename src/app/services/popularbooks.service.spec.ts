import { TestBed, inject } from '@angular/core/testing';

import { PopularbooksService } from './popularbooks.service';

describe('PopularbooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopularbooksService]
    });
  });

  it('should be created', inject([PopularbooksService], (service: PopularbooksService) => {
    expect(service).toBeTruthy();
  }));
});
