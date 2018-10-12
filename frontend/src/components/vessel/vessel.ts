import { Component } from '@angular/core';
import {ActionSheetController, NavController} from 'ionic-angular';
import {NotificationCenterPage} from '../../pages/notification-center/notification-center';

/**
 * Generated class for the VesselComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'vessel',
  templateUrl: 'vessel.html'
})
export class VesselComponent {

  text: string;

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController) {
    console.log('Hello VesselComponent Component');
    this.text = 'Hello World';
  }

  showActions() {
    console.log('show action');
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Notification center',
          handler: () => {
            this.navCtrl.push(NotificationCenterPage, {vessel: {id: '12345'}});
          }
        },{
          text: 'Cancel',
          handler: () => {
            console.log('cancel');
          }
        },{
          text: 'Delayed',
          handler: () => {
            console.log('Delayed');
          }
        },{
          text: 'Port call',
          handler: () => {
            console.log('Port call');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
