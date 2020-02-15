import { TestBed } from '@angular/core/testing';

import { UserregserviceService } from './userregservice.service';

describe('UserregserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserregserviceService = TestBed.get(UserregserviceService);
    expect(service).toBeTruthy();
  });
});
