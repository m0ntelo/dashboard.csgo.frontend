import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CsMapsRoutingModule } from './cs-maps-routing.module';
import { CsMapsComponent } from './cs-maps.component';
import { MapsListComponent } from './maps-list/maps-list.component';


@NgModule({
  declarations: [
    CsMapsComponent,
    MapsListComponent
  ],
  imports: [
    CommonModule,
    CsMapsRoutingModule,
    HttpClientModule
  ]
})
export class CsMapsModule { }
