import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PortCallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-port-call',
  templateUrl: 'port-call.html',
})
export class PortCallPage {
  vessel;
  actions = [
    {
      name: 'Arrived at port',
      timestamp: false,
      checked: false,
      action: this.arrivedAtPort
    },
    {
      name: 'Arrived at berth',
      timestamp: false,
      checked: false,
      action: this.arrivedAtBerth
    },
    {
      name: 'Discharge',
      timestamp: false,
      checked: false,
      action: this.startDischarging
    },
    {
      name: 'Left port',
      timestamp: false,
      checked: false,
      action: this.leavePort
    }
  ];

  isDischarging = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vessel = this.navParams.get('vessel');
  }

  arrivedAtPort() {
    this.actions[0].checked = true;
    // @ts-ignore
    this.actions[0].timestamp = new Date();
  }

  arrivedAtBerth() {
    this.actions[1].checked = true;
    // @ts-ignore
    this.actions[1].timestamp = new Date();
  }

  startDischarging() {
    const discharging = this.actions[2];
    if (!this.isDischarging) {
      this.isDischarging = true;
      discharging.name = 'Discharging ...';
    } else {
      this.isDischarging = false;
      discharging.checked = true;
      discharging.name = 'Discharged';
      // @ts-ignore
      discharging.timestamp = new Date();
    }
  }

  leavePort() {
    this.actions[3].checked = true;
    // @ts-ignore
    this.actions[3].timestamp = new Date();
  }
}
