import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from '@core/guard/login.guard';

const routes: Routes = [
    { 
        path: '', 
        loadChildren: () => import('./modules/cs-login/cs-login.module').then(m => m.CsLoginModule)
    },
    { 
        path: 'maps', 
        loadChildren: () => import('./modules/cs-maps/cs-maps.module').then(m => m.CsMapsModule),
        canActivate: [LoginGuard]
    },
    { 
        path: '**', 
        redirectTo: '/', 
        pathMatch: 'full' 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }