import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  registerCredentials = { email: 'ouwe@pee.com', password: 'qweqwe' };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser() {
    const { email, password } = this.registerCredentials;
    this.authService.register(email, password);
  }

  LoginPage() {
    this.navCtrl.setRoot(LoginPage);
  }
}
