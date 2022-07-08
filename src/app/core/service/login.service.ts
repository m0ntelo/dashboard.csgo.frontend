import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router
  ) { }

  public login(): void {
    localStorage.setItem('login', 'true')
  }

  public logout(): void {
    this.router.navigate(['/']);
  }

  public logged(): boolean {
    return localStorage.getItem('login') === 'true';
  }
}
