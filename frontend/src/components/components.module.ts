import { NgModule } from '@angular/core';
import { VesselComponent } from './vessel/vessel';
import { NotificationComponent } from './notification/notification';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [VesselComponent, NotificationComponent],
  imports: [IonicModule],
  exports: [VesselComponent, NotificationComponent]
})
export class ComponentsModule {}
