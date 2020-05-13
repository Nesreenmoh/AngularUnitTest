import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user = {
    name: 'Nesreen',
  };
  constructor() {}

  authenticate() {
    localStorage.setItem('user', 'Nesreen');
  }

  checkAuthentication() {
    return localStorage.getItem('user') === 'Nesreen';
  }
}
