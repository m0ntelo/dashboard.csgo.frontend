import { Component, OnDestroy, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard'; 
import { Subject, takeUntil } from 'rxjs';

import { ISteamRemoteStorageService } from '@core/service/isteam-remote-storage.service';
import { SnackbarService } from '@core/service/snackbar.service';
import { CollectionDetails } from '@app/shared/model/collection-details';
import { PublishedFileDetails } from '@app/shared/model/published-file-details';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-maps-list',
  templateUrl: './maps-list.component.html',
  styleUrls: ['./maps-list.component.scss']
})
export class MapsListComponent implements OnInit, OnDestroy {

  public env = environment;
  public link?: string = this.env.linkWorkShopSteam;
  public details?: PublishedFileDetails;
  private collection?: CollectionDetails;
  private unSubscribe = new Subject<boolean>();

  constructor(
    private steamRemoteStorageService: ISteamRemoteStorageService,
    private clipboard: Clipboard,
    private snackbarService: SnackbarService
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
          this.snackbarService.message('reclame com a valve! :(', true);
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
          this.snackbarService.message('reclame com a valve! :(', true);
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

  public copyCode(id?: string) {
    this.snackbarService.message('Copiado :D', false);
    this.clipboard.copy(`./srcds_run -game csgo -console -usercon -tickrate ${this.env.tickRate} +host_workshop_collection ${this.env.idCollectionSteam} +workshop_start_map ${id} -authkey ${this.env.apiKeySteam} +sv_setsteamaccount ${this.env.gsltSteam} -net_port_try`);
  }

  public linkWorkshop(id?: string): void {
    window.open(this.link + id, "_blank");
  }
}
