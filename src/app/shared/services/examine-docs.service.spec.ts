import { TestBed } from '@angular/core/testing';

import { ExamineDocsService } from './examine-docs.service';

describe('ExamineDocsService', () => {
  let service: ExamineDocsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamineDocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
