import { LoginPage } from '../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationCenterPage } from '../notification-center/notification-center';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  vessels: AngularFirestoreCollection<any>;

  constructor(public navCtrl: NavController, private fireStore: AngularFirestore) {
    const collection: AngularFirestoreCollection<any> = fireStore.collection('vessels');
    const collection$: Observable<any> = collection.valueChanges();
    collection$.subscribe(data => {
      this.vessels = data;
    });
  }

  goToNotifs() {
    this.navCtrl.push(NotificationCenterPage);
  }

  logoutUser() {
    this.navCtrl.setRoot(LoginPage);
  }
}
