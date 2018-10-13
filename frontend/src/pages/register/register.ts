import { LoginPage } from '../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  registerCredentials = { email: 'ouwe@pee.com', password: 'qweqwe' };

  constructor(public navCtrl: NavController,
    public authService: AuthService) {
  }

  registerUser() {
    const { email, password } = this.registerCredentials;
    this.authService.register(email, password);
  }

  LoginPage() {
    this.navCtrl.setRoot(LoginPage);
  }
}
