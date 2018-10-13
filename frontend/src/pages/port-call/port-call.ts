import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

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
  completed = false;
  notificationsCollection: AngularFirestoreCollection<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fireStore: AngularFirestore) {
    this.vessel = this.navParams.get('vessel');
    this.notificationsCollection = fireStore.collection('notifications');
    fireStore.firestore.settings({timestampsInSnapshots: true});
  }

  arrivedAtPort() {
    this.actions[0].checked = true;
    // @ts-ignore
    this.actions[0].timestamp = new Date();
    const description = `${this.vessel.vesselName} arrived at ${this.vessel.arrival} port`;
    this.createNotification(description)
  }

  arrivedAtBerth() {
    this.actions[1].checked = true;
    // @ts-ignore
    this.actions[1].timestamp = new Date();
    const description = `${this.vessel.vesselName} had berth at ${this.vessel.berthName}`;
    this.createNotification(description);
  }

  startDischarging() {
    const discharging = this.actions[2];
    if (!this.isDischarging) {
      this.isDischarging = true;
      discharging.name = 'Discharging ...';
      const description = `${this.vessel.vesselName} started discharging`;
      this.createNotification(description);
    } else {
      this.isDischarging = false;
      discharging.checked = true;
      discharging.name = 'Discharged';
      // @ts-ignore
      discharging.timestamp = new Date();
      const description = `${this.vessel.vesselName} finished discharging`;
      this.createNotification(description);
    }
  }

  leavePort() {
    this.actions[3].checked = true;
    // @ts-ignore
    this.actions[3].timestamp = new Date();
    this.completed = true;
    const description = `${this.vessel.vesselName} left ${this.vessel.arrival} port`;
    this.createNotification(description);

    setTimeout(() => {
      this.navCtrl.pop();
    }, 1000);
  }

  createNotification(description) {
    this.notificationsCollection.add({
      description: description,
      vesselName: this.vessel.vesselName,
      vesselNumber: this.vessel.vesselNumber,
      timestamp: new Date()
    });
  }
}
