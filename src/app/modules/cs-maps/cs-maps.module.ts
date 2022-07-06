import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsMapsRoutingModule } from './cs-maps-routing.module';
import { CsMapsComponent } from './cs-maps.component';


@NgModule({
  declarations: [
    CsMapsComponent
  ],
  imports: [
    CommonModule,
    CsMapsRoutingModule
  ]
})
export class CsMapsModule { }
