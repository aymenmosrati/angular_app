import { TestBed } from '@angular/core/testing';

import { ShareServicesService } from './share-services.service';

describe('ShareServicesService', () => {
  let service: ShareServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
