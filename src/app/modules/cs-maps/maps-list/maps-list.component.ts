import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { ISteamRemoteStorageService } from '@core/service/isteam-remote-storage.service';

@Component({
  selector: 'app-maps-list',
  templateUrl: './maps-list.component.html',
  styleUrls: ['./maps-list.component.scss']
})
export class MapsListComponent implements OnInit, OnDestroy {

  private unSubscribe = new Subject<boolean>();

  constructor(
    private steamRemoteStorageService: ISteamRemoteStorageService
  ) { }

  public ngOnInit(): void {
    this.GetCollectionDetails();
    // this.GetPublishedFileDetails();
  }

  public ngOnDestroy(): void {
    this.unSubscribe.next;
    this.unSubscribe.complete;
  }

  private GetCollectionDetails(): void {
    this.steamRemoteStorageService.GetCollectionDetails()
      .pipe(takeUntil(this.unSubscribe))
      .subscribe(
        (req) => {
          console.log(req, 'req');
        }
      )
  }

  private GetPublishedFileDetails(): void {
    this.steamRemoteStorageService.GetPublishedFileDetails()
      .pipe(takeUntil(this.unSubscribe))
      .subscribe(
        (req) => {
          console.log(req, 'req');
        }
      )
  }
}
