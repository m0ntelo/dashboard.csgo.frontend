import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { MatSnackBar } from '@angular/material/snack-bar';
import { CollectionDetails } from '@shared/model/collection-details';
import { PublishedFileDetails } from '@shared/model/published-file-details';

@Injectable({
  providedIn: 'root'
})
export class ISteamRemoteStorageService {

  private baseUrl: string = 'http://localhost:3000/';

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }
  
  public GetCollectionDetails(): Observable<CollectionDetails[]> {
    return this.http.get<CollectionDetails[]>(this.baseUrl + 'GetAllMaps').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  public GetPublishedFileDetails(): Observable<PublishedFileDetails[]> {
    return this.http.get<PublishedFileDetails[]>(this.baseUrl + 'GetMapsById').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  private errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

  public showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
}
