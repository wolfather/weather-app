import { CityService } from './../city/city.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { WheatherService } from './weather.service';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        HttpClientJsonpModule
    ],
    declarations: [WeatherComponent],
    exports: [WeatherComponent],
    entryComponents: [WeatherComponent],
    providers: [
        HttpClient,
        WheatherService,
        CityService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WheatherModule {}