import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public admin$ = this.authService.admin;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 

    this.form = this.formBuilder.group({
      login_email: ['', Validators.required],
      login_password:['', Validators.required]

    });
  }

  ngOnInit() {
  }

  //login method
  login(){
    const inputValue = this.form.value;
    //console.log(inputValue.login_email, inputValue.login_password);

    this.authService.login(inputValue.login_email, inputValue.login_password)
    .subscribe(
      success => this.router.navigate(['/dashboard']),
      error => alert(error)
    );
  }
}
