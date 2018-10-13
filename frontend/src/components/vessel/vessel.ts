import {Component, Input} from '@angular/core';
import {ActionSheetController, AlertController, NavController} from 'ionic-angular';
import {PortCallPage} from '../../pages/port-call/port-call';
import {AuthService} from '../../services/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'vessel',
  templateUrl: 'vessel.html'
})
export class VesselComponent {
  text: string;
  user;

  @Input()
  vessel;

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public authService: AuthService, private alertCtrl: AlertController, private fireStore: AngularFirestore) {
    this.text = 'Hello World';
    this.user = this.authService.getUser();
  }

  showActions() {
    const actions = [
      {
        text: 'Delayed',
        handler: () => {
          console.log('Delayed');
          this.showDateAlert();
        }
      },
      {
        text: 'Cancel',
        handler: () => {
          console.log('cancel');
        }
      }
    ];

    if (this.user.user.email === 'carrier@chainport.com') {
      const actionSheet = this.actionSheetCtrl.create({
        buttons: actions
      });
      actionSheet.present();
    }

    if (this.user.user.email === 'port@chainport.com') {
      this.navCtrl.push(PortCallPage, {vessel: this.vessel});
    }
  }

  showDateAlert() {
    let alert = this.alertCtrl.create({
      title: 'Update ETA',
      inputs: [
        {
          name: 'ETA',
          placeholder: 'ETA',
          type: 'datetime-local',
          value: this.vessel.ETA
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {
            console.log('update ETA ', data);
            /*this.vesselDoc.update({
              ETA: data.ETA
            });*/
            this.vessel.ETA = data.ETA;
          }
        }
      ]
    });
    alert.present();
  }
}
