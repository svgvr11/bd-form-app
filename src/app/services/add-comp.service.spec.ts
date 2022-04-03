import { TestBed } from '@angular/core/testing';

import { AddCompService } from './add-comp.service';

describe('AddCompService', () => {
  let service: AddCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
