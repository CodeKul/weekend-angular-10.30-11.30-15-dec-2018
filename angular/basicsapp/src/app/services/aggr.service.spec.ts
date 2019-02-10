import { TestBed } from '@angular/core/testing';

import { AggrService } from './aggr.service';

describe('AggrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AggrService = TestBed.get(AggrService);
    expect(service).toBeTruthy();
  });
});
