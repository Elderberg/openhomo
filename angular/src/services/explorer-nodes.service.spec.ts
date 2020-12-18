import { TestBed } from '@angular/core/testing';

import { ExplorerNodesService } from './explorer-nodes.service';

describe('ExplorerNodesService', () => {
  let service: ExplorerNodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExplorerNodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
