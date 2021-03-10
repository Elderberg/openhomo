import { TestBed } from '@angular/core/testing';

import { ExplorerResourceService } from './explorer-resource.service';

describe('ExplorerResourceService', () => {
  let service: ExplorerResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExplorerResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
