import { TestBed } from '@angular/core/testing';

import { ISteamRemoteStorageService } from './isteam-remote-storage.service';

describe('ISteamRemoteStorageService', () => {
  let service: ISteamRemoteStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ISteamRemoteStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
