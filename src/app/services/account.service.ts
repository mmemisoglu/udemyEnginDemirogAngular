import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {

  constructor() { }
  loggeIn = false;
  login(user: User): boolean {
    if (user.userName == "Mustafa" && user.password == "111") {
      this.loggeIn = true;
      localStorage.setItem("isLogged", "user.userName");
      return true;
    }
    return false;
  }

  isLoggedIn() {
    return this.loggeIn;
  }

  logOut() {
    localStorage.removeItem("isLogged");
    this.loggeIn = false;
  }

}
