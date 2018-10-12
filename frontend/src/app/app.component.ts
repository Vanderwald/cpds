import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs-compat';
import { LoginPage } from '../pages/login/login';
import moment from 'moment';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  vessels: Observable<any[]>;
  users: Observable<any[]>;  
  private valuesCollection: AngularFirestoreCollection<any>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, db: AngularFirestore) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.valuesCollection = db.collection<any>('vessels');

      this.vessels = db.collection('vessels').valueChanges();
      this.users = db.collection('users').valueChanges();

      // this.valuesCollection.add({
      //   _id: '5bc0850332c508ab3037ca77',
      //   berthName: 537,
      //   vesselNumber: 548,
      //   vesselName: 'Horn',
      //   department: 'Israel',
      //   arrival: 'Paraguay',
      //   ata: 'Sun Dec 21 2014 10:06:18 GMT+0000 (UTC)',
      //   eta: moment('Wed Aug 02 2017 02:29:57 GMT+0000 (UTC)').format('DD/MM/YY hh:mm')
      // });
    });
  }
}

