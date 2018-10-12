import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationCenterPage } from '../../pages/notification-center/notification-center';
import { AuthService } from '../../services/auth.service';
import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  vessel = {
    _id: '5bc0850332c508ab3037ca77',
    berthName: 537,
    vesselNumber: 548,
    vesselName: 'Horn',
    department: 'ISR',
    arrival: 'PRG',
    ata: 'Sun Dec 21 2014 10:06:18 GMT+0000 (UTC)',
    eta: moment('Wed Aug 02 2017 02:29:57 GMT+0000 (UTC)').format('DD/MM/YY hh:mm')
  };

  constructor(public navCtrl: NavController, public authService: AuthService) {}

  goToNotifs() {
    console.log('show action');

    this.navCtrl.push(NotificationCenterPage, { vessel: { id: 'test' } });
  }

  logoutUser() {
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }
}
