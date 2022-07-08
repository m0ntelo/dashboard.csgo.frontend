import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { 
        path: '', 
        loadChildren: () => import('./modules/cs-login/cs-login.module').then(m => m.CsLoginModule) 
    },
    { 
        path: 'maps', 
        loadChildren: () => import('./modules/cs-maps/cs-maps.module').then(m => m.CsMapsModule) 
    },
    { 
        path: '**', 
        redirectTo: '/maps', 
        pathMatch: 'full' 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }