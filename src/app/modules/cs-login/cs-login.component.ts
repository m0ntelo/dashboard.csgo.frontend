import { Component, OnInit } from '@angular/core';
import { LoginService } from '@core/service/login.service';

@Component({
  selector: 'app-cs-login',
  templateUrl: './cs-login.component.html',
  styleUrls: ['./cs-login.component.scss']
})
export class CsLoginComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  public login(): void {
    this.loginService.login();
  }
}
