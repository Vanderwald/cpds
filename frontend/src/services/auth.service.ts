import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase";

@Injectable()
export class AuthService {

  private isLoggedIn = false;
  private database = firebase.database().ref('/chainport-hackaton/vessels');
  private user;

  constructor(public afAuth: AngularFireAuth) { }

  register(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch(function(error) {

    });
  }

  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.isLoggedIn = false;
    }).catch(function(error) {
      console.log('Sign out issue', error);
    });
  }

  authenticated() : boolean {
    return this.isLoggedIn;
  }

  setUser(user) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }
}
