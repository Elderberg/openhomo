import { TestBed } from '@angular/core/testing';

import { ExplorerRoomsService } from './explorer-rooms.service';

describe('ExplorerRoomsService', () => {
  let service: ExplorerRoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExplorerRoomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
