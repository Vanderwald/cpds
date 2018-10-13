import {HomePage} from '../home/home';
import {RegisterPage} from '../register/register';
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  registerCredentials = {email: 'carrier@chainport.com', password: 'chainport'};
  hasError = false;
  errorMessage;

  constructor(public navCtrl: NavController,
              public authService: AuthService) {
  }

  loginUser() {
    this.hasError = false;
    const {email, password} = this.registerCredentials;
    this.authService.login(email, password)
      .then((user) => {
        console.log(user);
        this.authService.setUser(user);
        this.navCtrl.setRoot(HomePage)
      })
      .catch((error) => {
        this.hasError = true;
        this.errorMessage = error.message;
      });
  }

  logoutUser() {
    this.authService.logout();
  }

  registerPage() {
    this.navCtrl.setRoot(RegisterPage);
  }

  isAuthenticated() {
    return this.authService.authenticated();
  }
}
