import { Component, Input } from '@angular/core';
import { ActionSheetController, NavController } from 'ionic-angular';
import { PortCallPage } from '../../pages/port-call/port-call';

@Component({
  selector: 'vessel',
  templateUrl: 'vessel.html'
})
export class VesselComponent {
  text: string;

  @Input()
  vessel;
  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController) {
    this.text = 'Hello World';
  }

  showActions() {
    console.log('show action');
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Port call',
          handler: () => {
            this.navCtrl.push(PortCallPage, { vessel: this.vessel });
          }
        },
        {
          text: 'Delayed',
          handler: () => {
            console.log('Delayed');
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log('cancel vessel');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
