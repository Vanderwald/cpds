import { HomePage } from './../home/home';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  registerCredentials = { email: 'ouwe@pee.com', password: 'qweqwe' };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginUser() {
    const { email, password } = this.registerCredentials;
    this.authService.login(email, password);
    this.navCtrl.setRoot(HomePage)
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
