import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CameraComponent } from './camera/camera.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./camera/camera.module').then(m => m.CameraModule),
    component: CameraComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
