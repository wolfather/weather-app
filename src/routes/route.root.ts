import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent } from './../weather/weather.component';

const ROUTES: Routes = [
  {
    path: 'home',
    component: WeatherComponent,
    pathMatch: 'full'
  },
  {path: '', component: WeatherComponent},
  {path: '**', redirectTo: ''}
];


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      // enableTracing: true,
      useHash: true
    })
  ],
  exports: [RouterModule],
})
export class RouteRootModule {}
