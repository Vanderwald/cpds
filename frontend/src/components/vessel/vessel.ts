import { Component, Input } from '@angular/core';
import { ActionSheetController, NavController } from 'ionic-angular';
import { PortCallPage } from '../../pages/port-call/port-call';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'vessel',
  templateUrl: 'vessel.html'
})
export class VesselComponent {
  text: string;
  user;

  @Input()
  vessel;
  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public authService: AuthService) {
    this.text = 'Hello World';
    this.user = this.authService.getUser();
  }

  showActions() {
    const actions = [
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
    ];

    if (this.user.user.email === 'carrier@chainport.com') {
      const actionSheet = this.actionSheetCtrl.create({
        buttons: actions
      });
      actionSheet.present();
    }

    if (this.user.user.email === 'port@chainport.com') {
      this.navCtrl.push(PortCallPage, { vessel: this.vessel });
    }
  }
}
