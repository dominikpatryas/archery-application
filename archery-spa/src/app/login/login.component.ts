import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';
import {Router} from '@angular/router';
import {AlertifyService} from '../_services/alertify.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  registerMode = false;
  constructor(private userService: UserService, private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.model);
    console.log(environment.apiUrl + 'login_check/');
    this.userService.login(this.model).subscribe(next => {
      this.alertify.success('Success');
    }, error => {
      this.alertify.error(error + '');
    }, () => {
      this.router.navigate(['']);
    });
  }

  changeRegisterMode() {
    if (this.registerMode) {
      this.registerMode = false;
    } else {
      this.registerMode = true;
    }
  }



}
