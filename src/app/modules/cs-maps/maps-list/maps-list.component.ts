import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { ISteamRemoteStorageService } from '@core/service/isteam-remote-storage.service';
import { CollectionDetails } from '@app/shared/model/collection-details';
import { PublishedFileDetails } from '@app/shared/model/published-file-details';

@Component({
  selector: 'app-maps-list',
  templateUrl: './maps-list.component.html',
  styleUrls: ['./maps-list.component.scss']
})
export class MapsListComponent implements OnInit, OnDestroy {

  public details?: PublishedFileDetails;
  private collection?: CollectionDetails;
  private unSubscribe = new Subject<boolean>();

  constructor(
    private steamRemoteStorageService: ISteamRemoteStorageService
  ) { }

  public ngOnInit(): void {
    this.GetAllMaps();
  }

  public ngOnDestroy(): void {
    this.unSubscribe.next;
    this.unSubscribe.complete;
  }

  private GetAllMaps(): void {
    this.steamRemoteStorageService.GetAllMaps()
      .pipe(takeUntil(this.unSubscribe))
      .subscribe(
        (req: CollectionDetails) => {
          this.collection = req;
          this.GetMapsById();
        },
        () => {
          this.steamRemoteStorageService.message('reclame com a valve! :(', true);
        }
      )
  }

  private GetMapsById(): void {
    this.steamRemoteStorageService.GetMapsById(this.createBody())
      .pipe(takeUntil(this.unSubscribe))
      .subscribe(
        (req: PublishedFileDetails) => {
          this.details = req;
        },
        () => {
          this.steamRemoteStorageService.message('reclame com a valve! :(', true);
        }
      )
  }

  private createBody(): URLSearchParams {
    const body = new URLSearchParams(this.remapArray())
    body.set('itemCount', `${this.collection?.total}`)
    return body;
  }

  private remapArray(): any {
    const maps = this.collection?.maps;
    return (
      maps?.map(
        (item: any, index) => [`collectionId[${index}]`, item.publishedfileid]
      )
    )
  }

  public sliceWords(words: string = ''): string {
    return words.slice(0, 200);
  } 
}
