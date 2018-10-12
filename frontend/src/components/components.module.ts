import { NgModule } from '@angular/core';
import { VesselComponent } from './vessel/vessel';
import { IonicModule } from 'ionic-angular';
@NgModule({
  declarations: [VesselComponent],
  imports: [IonicModule],
  exports: [VesselComponent]
})
export class ComponentsModule {}
