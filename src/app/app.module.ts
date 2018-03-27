import { WheatherModule } from './../weather/weather.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouteRootModule } from './../routes/route.root';


import { AppComponent } from './app.component';
import { ServicesModule } from '../services/services.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WheatherModule,
    RouteRootModule,
    ServicesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
