import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { CsLoginRoutingModule } from './cs-login-routing.module';
import { CsLoginComponent } from './cs-login.component';


@NgModule({
  declarations: [
    CsLoginComponent
  ],
  imports: [
    CommonModule,
    CsLoginRoutingModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class CsLoginModule { }
