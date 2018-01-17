import { TestBed, inject } from '@angular/core/testing';

import { Dashboard2Service } from './dashboard2.service';

describe('Dashboard2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dashboard2Service]
    });
  });

  it('should be created', inject([Dashboard2Service], (service: Dashboard2Service) => {
    expect(service).toBeTruthy();
  }));
});
