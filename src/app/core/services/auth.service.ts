import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  isLoggedIn = false;
  redirectUrl: string;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router) {
  }
  
  customLogin() {

  }

  googleLogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((success) => {
        // console.log(success);
        localStorage.setItem('user', success.user.email);
        this.isLoggedIn = true;
        window.location.reload();
        this.router.navigate(['/setting']);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  logout() {
    this.afAuth.auth.signOut();
    this.isLoggedIn = false;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
