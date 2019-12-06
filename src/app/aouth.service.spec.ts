import { TestBed } from '@angular/core/testing';

import { AouthService } from './aouth.service';

describe('AouthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AouthService = TestBed.get(AouthService);
    expect(service).toBeTruthy();
  });
});
