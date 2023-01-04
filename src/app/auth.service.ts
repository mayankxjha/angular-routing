import {resolve} from "@angular/compiler-cli";
import {Injectable} from "@angular/core";

export class AuthService {

  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);

      }, 500)
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
