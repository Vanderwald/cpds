import { LoginPage } from '../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationCenterPage } from '../notification-center/notification-center';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  vessels: AngularFirestoreCollection<any>;

  notifications: AngularFirestoreCollection<any>;

  // constructor(private fireStore: AngularFirestore) {
  // }
  constructor(public navCtrl: NavController, private fireStore: AngularFirestore) {
    const collection: AngularFirestoreCollection<any> = fireStore.collection('vessels');
    const collection$: Observable<any> = collection.valueChanges();
    collection$.subscribe(data => {
      data.map(vessel => vessel.ETA = this.setVesselETA(vessel.ETA));
      this.vessels = data;
    });
    fireStore.firestore.settings({ timestampsInSnapshots: true });
    const notificationCollections: AngularFirestoreCollection<any> = fireStore.collection(
      'notifications',
      notification => notification.orderBy('timestamp', 'desc')
    );
    const notificationCollection$: Observable<any> = notificationCollections.valueChanges();
    notificationCollection$.subscribe(data => {
      this.notifications = data;
    });
  }

  goToNotifs() {
    this.navCtrl.push(NotificationCenterPage);
  }

  logoutUser() {
    this.navCtrl.setRoot(LoginPage);
  }

  setVesselETA(ETA) {
    let t = new Date(1970, 0, 1);
    t.setSeconds(ETA.seconds);
    return t;
  }
}
