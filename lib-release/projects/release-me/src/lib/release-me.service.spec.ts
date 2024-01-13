import { TestBed } from '@angular/core/testing';

import { ReleaseMeService } from './release-me.service';

describe('ReleaseMeService', () => {
  let service: ReleaseMeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReleaseMeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
