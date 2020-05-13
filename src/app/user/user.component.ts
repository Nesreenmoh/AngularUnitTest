import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public checkLoggin: string;
  constructor(private readonly authentication: AuthenticationService) {
    this.authentication.authenticate();
  }

  ngOnInit(): void {}

  loggedIn() {
    if (this.authentication.checkAuthentication()) {
      return 'The user is authenticated and Logged in';
    } else {
      return 'Not authenticated';
    }
  }

  checkLogin() {
    if (this.authentication.checkAuthentication()) {
      this.checkLoggin = 'The user is authenticated and Logged in';
      return this.checkLoggin;
    } else {
      this.checkLoggin = 'Not authenticated';
      return this.checkLoggin;
    }
  }
}
