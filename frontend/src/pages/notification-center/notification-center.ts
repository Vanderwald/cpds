import { Component } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'page-notification-center',
  templateUrl: 'notification-center.html'
})
export class NotificationCenterPage {
  notifications;

  constructor(private fireStore: AngularFirestore) {
    fireStore.firestore.settings({timestampsInSnapshots: true});
    const collection: AngularFirestoreCollection<any> = fireStore.collection('notifications', notification => notification.orderBy('timestamp', 'desc'));
    const collection$: Observable<any> = collection.valueChanges();
    collection$.subscribe(data => {
      this.notifications = data;
    });
  }
}
