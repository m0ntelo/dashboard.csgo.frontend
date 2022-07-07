import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

import { SnackbarService } from '@core/service/snackbar.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public env = environment;

  constructor(
    private clipboard: Clipboard,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
  }

  public copyCode() {
    this.snackbarService.message('Copiado :D', false);
    this.clipboard.copy(`connect ${this.env.serverIP}` + ';' +`password ${this.env.serverPassword}`);
  }
}
