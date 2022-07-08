import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsLoginComponent } from './cs-login.component';

const routes: Routes = [
  { 
    path: '', 
    component: CsLoginComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CsLoginRoutingModule { }
