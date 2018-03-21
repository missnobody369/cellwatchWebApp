import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form: FormGroup;

  constructor (
    private formBuilder: FormBuilder;
    private authService: AuthService;
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      signup_email: ['', Validators.required],
      signup_password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
