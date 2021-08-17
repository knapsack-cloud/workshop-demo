import { TestBed } from '@angular/core/testing';

import { ApDsService } from './ap-ds.service';

describe('ApDsService', () => {
  let service: ApDsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApDsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
