import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationCenterPage } from '../../pages/notification-center/notification-center';
import { AuthService } from '../../services/auth.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  vessels: any = [];

  constructor(public navCtrl: NavController, 
    public authService: AuthService,
    db: AngularFirestore) {
       const collection: AngularFirestoreCollection<any> = db.collection('vessels')
      console.log('qwjorqwjr', collection);
      const collection$: Observable<any> = collection.valueChanges()
      this.vessels = collection;
      collection$.subscribe(data => console.log(data) )
    }

  goToNotifs() {
    this.navCtrl.push(NotificationCenterPage);
  }

  logoutUser() {
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }
}
