import { NgModule } from '@angular/core';
import { VesselComponent } from './vessel/vessel';
import { NotificationComponent } from './notification/notification';
@NgModule({
	declarations: [VesselComponent,
    NotificationComponent],
	imports: [],
	exports: [VesselComponent,
    NotificationComponent]
})
export class ComponentsModule {}
