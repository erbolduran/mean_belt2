import { TestBed, inject } from '@angular/core/testing';

import { AppmntService } from './appmnt.service';

describe('AppmntService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppmntService]
    });
  });

  it('should be created', inject([AppmntService], (service: AppmntService) => {
    expect(service).toBeTruthy();
  }));
});
