import { TestBed, inject } from '@angular/core/testing';

import { TimeGuardService } from './time-guard.service';

describe('TimeGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeGuardService]
    });
  });

  it('should be created', inject([TimeGuardService], (service: TimeGuardService) => {
    expect(service).toBeTruthy();
  }));
});
