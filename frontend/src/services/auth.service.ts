import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  register(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('errorCode', errorCode);
      console.log('errorCode', errorMessage);
    });
  }

  login(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('errorCode', errorCode);
      console.log('errorCode', errorMessage);
    });
  }
  
  logout() {
    this.afAuth.auth.signOut().then(() => {
      console.log('Signed out');
    }).catch(function(error) {
      console.log('Sign out issue', error);
    });
  }
}