import { Component, OnInit } from '@angular/core';
import {UserService} from "../_services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  tekscik: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
      this.loadUser();
  }

  loadUser() {
    this.userService.getUser().subscribe((tekst: string) => {
      this.tekscik = tekst;
    });
  }

}
