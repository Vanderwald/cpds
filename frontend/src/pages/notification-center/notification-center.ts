import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificationCenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notification-center',
  templateUrl: 'notification-center.html',
})
export class NotificationCenterPage {
  vessel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vessel = this.navParams.get('vessel');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationCenterPage');
  }

}
