import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CameraComponent } from './camera.component';

@NgModule({
  declarations: [CameraComponent],
  imports: [IonicModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [CameraComponent],
})
export class CameraModule {}
