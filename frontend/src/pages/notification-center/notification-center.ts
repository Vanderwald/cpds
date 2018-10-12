import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import moment from 'moment';

/**
 * Generated class for the NotificationCenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notification-center',
  templateUrl: 'notification-center.html'
})
export class NotificationCenterPage {
  vessel;

  notification = {
    vesselname: 'Horn',
    timestamp: moment(new Date()).format('hh:mm'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis non enim et malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce efficitur velit ut mattis pharetra. Nulla convallis dolor id mattis pharetra. Suspendisse interdum gravida metus vestibulum tincidunt'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vessel = this.navParams.get('vessel');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationCenterPage');
  }
}
