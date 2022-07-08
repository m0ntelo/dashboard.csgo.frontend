import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from  '@core/service/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router,
    private snackbarService: SnackbarService
  ) { }

  public login(): void {
    localStorage.setItem('login', 'true');
    this.snackbarService.message('Logado com sucesso', false);
    this.router.navigate(['maps']);
  }

  public logout(): void {
    localStorage.removeItem('login');
    this.snackbarService.message('Logout com sucesso', false);
    this.router.navigate(['login']);
  }

  public logged(): void {
    if(this.authenticated()) {
      this.router.navigate(['maps']);
    }
  }

  public authenticated(): boolean {
    return localStorage.getItem('login') === 'true';
  }
}
