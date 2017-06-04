import { TestBed, inject } from '@angular/core/testing';

import { CareerHttpService } from './career-http.service';

describe('CareerHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CareerHttpService]
    });
  });

  it('should be created', inject([CareerHttpService], (service: CareerHttpService) => {
    expect(service).toBeTruthy();
  }));
});
