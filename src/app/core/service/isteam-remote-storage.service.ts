import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { MatSnackBar } from '@angular/material/snack-bar';
import { CollectionDetails } from '@shared/model/collection-details';
import { PublishedFileDetails } from '@shared/model/published-file-details';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ISteamRemoteStorageService {

  private env = environment;
  private baseUrl: string = this.env.apiUrl;
  private collectionId: string = this.env.idCollectionSteam;
  private collectionCount: string = '1';
  private path = { all: 'GetAllMaps', byId: 'GetMapsById' };

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }
  
  public GetAllMaps(): Observable<CollectionDetails> {
    let headers, body, options, params;

    params = { 'Content-Type': 'application/x-www-form-urlencoded' };
    headers = new HttpHeaders(params);
    options = { headers: headers };

    body = new URLSearchParams();
    body.set('collectionId', this.collectionId);
    body.set('collectionCount', this.collectionCount);
    
    return this.http.post<CollectionDetails[]>(this.baseUrl + this.path.all, body, options).pipe(
      map((obj) => obj),
      catchError((e) => this.error(e))
    );
  }

  public GetMapsById(body: URLSearchParams): Observable<PublishedFileDetails> {
    let headers, options, params;

    params = { 'Content-Type': 'application/x-www-form-urlencoded' };
    headers = new HttpHeaders(params);
    options = { headers: headers };

    return this.http.post<PublishedFileDetails[]>(this.baseUrl + this.path.byId, body, options).pipe(
      map((obj) => obj),
      catchError((e) => this.error(e))
    );
  }

  private error(e: any): Observable<any> {
    this.message("Ocorreu um erro!", true);
    return EMPTY;
  }

  private message(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
}
