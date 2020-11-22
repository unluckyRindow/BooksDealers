import { TestBed } from '@angular/core/testing';

import { MockedService } from './mocked.service';

describe('MockedService', () => {
  let service: MockedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
