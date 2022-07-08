import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '@core/service/login.service';

@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.scss']
})
export class LoginInComponent implements OnInit {

  public form: FormGroup = new FormGroup({});

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loginService.logged();
  }

  public onSubmit(): void {
    this.loginService.login();
  }

  public initForm(): void {
    this.form = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(6)]]
    })
  }
}
