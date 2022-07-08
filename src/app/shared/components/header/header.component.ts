import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

import { SnackbarService } from '@core/service/snackbar.service';
import { environment } from '@environments/environment';
import { LoginService } from '@core/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public env = environment;

  constructor(
    private clipboard: Clipboard,
    private snackbarService: SnackbarService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  public copyCode(): void {
    this.snackbarService.message('Copiado :D', false);
    this.clipboard.copy(`connect ${this.env.serverIP}` + ';' +`password ${this.env.serverPassword}`);
  }

  public logout(): void {
    this.loginService.logout();
  }
}
