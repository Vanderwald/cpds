import { Component, Input } from '@angular/core';

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

  @Input()
  vessel;

  constructor() {
    console.log('Hello VesselComponent Component');
    this.text = 'Hello World';
  }
}
