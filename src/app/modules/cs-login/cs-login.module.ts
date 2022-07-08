import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { CsLoginRoutingModule } from './cs-login-routing.module';
import { CsLoginComponent } from './cs-login.component';
import { LoginInComponent } from './login-in/login-in.component';


@NgModule({
  declarations: [
    CsLoginComponent,
    LoginInComponent
  ],
  imports: [
    CommonModule,
    CsLoginRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CsLoginModule { }
