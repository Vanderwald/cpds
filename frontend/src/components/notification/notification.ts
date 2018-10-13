import {Component, Input, OnInit} from '@angular/core';

/**
 * Generated class for the NotificationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'notification',
  templateUrl: 'notification.html'
})
export class NotificationComponent implements OnInit {
  @Input()
  notification;

  constructor() {

  }

  ngOnInit(): void {
    let t = new Date(1970, 0, 1);
    t.setSeconds(this.notification.timestamp.seconds);
    this.notification.timestamp = t;
  }
}
