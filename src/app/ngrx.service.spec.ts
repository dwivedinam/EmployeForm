import { TestBed } from '@angular/core/testing';

import { NgrxService } from './ngrx.service';

describe('NgrxService', () => {
  let service: NgrxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgrxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
