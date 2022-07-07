import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

import { SnackbarService } from '@core/service/snackbar.service';
;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private clipboard: Clipboard,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
  }

  public copyCode() {
    this.snackbarService.message('Copiado :D', false);
    this.clipboard.copy('connect 35.247.213.164;password "batatinha1234"');
  }
}
