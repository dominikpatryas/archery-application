import { Component } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {UserService} from './_services/user.service';
import {User} from './_models/user';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'archery-spa';

  jwtHelper = new JwtHelperService();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (token) {
      this.userService.dekodedToken = this.jwtHelper.decodeToken(token);
    }
  }
}
