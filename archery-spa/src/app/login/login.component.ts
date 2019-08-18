import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';
import {Router} from '@angular/router';
import {AlertifyService} from '../_services/alertify.service';
import {environment} from '../../environments/environment';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../_models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  registerForm: FormGroup;
  registerMode = false;
  user: User;
  constructor(private userService: UserService, private router: Router, private alertify: AlertifyService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  login() {
    this.userService.login(this.model).subscribe(next => {
      this.alertify.success('Success');
    }, error => {
      this.alertify.error(error + '');
    }, () => {
      this.router.navigate(['']);
    });
  }

  changeRegisterMode() {
    // this.model = [];
    if (this.registerMode) {
      this.registerMode = false;
    } else {
      this.registerMode = true;
    }
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : {'missmatch': true};
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      gender: ['male'],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', Validators.required],
      lastName: ['', Validators.required],
      dateBirth: [null, Validators.required],
      city: ['', Validators.required],
      archeryClub: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {validator: this.passwordMatchValidator});
  }

  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      this.userService.register(this.user).subscribe(() => {
        this.alertify.success('Registration successful');
      }, error => {
        this.alertify.error(error);
      }, () => {
        this.userService.login(this.user).subscribe(() => {
          this.router.navigate(['/']);
        });
      });
    }
  }



}
