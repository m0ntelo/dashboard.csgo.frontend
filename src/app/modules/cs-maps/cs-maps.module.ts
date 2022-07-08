import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CsMapsRoutingModule } from './cs-maps-routing.module';
import { CsMapsComponent } from './cs-maps.component';
import { MapsListComponent } from './maps-list/maps-list.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';


@NgModule({
  declarations: [
    CsMapsComponent,
    MapsListComponent,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    CsMapsRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ]
})
export class CsMapsModule { }
