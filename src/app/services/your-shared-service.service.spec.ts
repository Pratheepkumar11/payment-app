import { TestBed } from '@angular/core/testing';

import { YourSharedServiceService } from './your-shared-service.service';

describe('YourSharedServiceService', () => {
  let service: YourSharedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourSharedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
