import { TestBed } from '@angular/core/testing';

import { TransformValueService } from './transform-value.service';

describe('TransformValueService', () => {
  let service: TransformValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
