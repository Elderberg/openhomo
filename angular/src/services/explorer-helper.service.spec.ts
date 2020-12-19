import { TestBed } from '@angular/core/testing';

import { ExplorerHelperService } from './explorer-helper.service';

describe('ExplorerHelperService', () => {
  let service: ExplorerHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExplorerHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
