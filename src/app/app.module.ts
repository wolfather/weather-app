import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopbarModule } from './../topbar/topbar.module';
import { WheatherModule } from './../weather/weather.module';
import { RouteRootModule } from './../routes/route.root';
import { ServicesModule } from '../services/services.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WheatherModule,
    RouteRootModule,
    TopbarModule,
    ServicesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
