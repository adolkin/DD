import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class SignupService {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
  ) { }

  createUser(formData: any) {
    // console.log(formData);
    this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password)
      .then((success) => {
        console.log('uid', success.uid);
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
