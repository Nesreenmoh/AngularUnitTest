import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public checkLoggin: string;
  public user: { name: string };
  public data: string;
  public isLoggedIn = false;

  constructor(private readonly authentication: AuthenticationService, private readonly dataService: DataService) {
    this.authentication.authenticate();
    this.user = this.authentication.user;
    this.dataService.getDetails().then((data: string) => {
      this.data = data;
    });
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
