import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs-compat';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  // rootPage:any = HomePage;
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
    });
  }
}

