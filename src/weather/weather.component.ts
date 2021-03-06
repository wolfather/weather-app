import { Component, OnInit, Input } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';

import { CityService } from './../city/city.service';
import { WheatherService } from './weather.service';
import { StorageService } from './../services/storage.service';
import { ColorsService } from './../services/colors.service';
import { TemperatureService } from './../services/temperature.service';
import { TimerService } from './../services/timer.service';
import { ErrorMessageService } from './../services/errormessage.service';

import { Icity } from './../city/city.interface';
import { Iweather, IweatherList } from './weather.interface';


@Component({
    moduleId: module.id.toString(),
    selector: 'app-weather-component',
    templateUrl: './weather.template.html',
    styleUrls: ['./weather.style.css'],
})
export class WeatherComponent implements OnInit {
    //@Input() cityInput?: string;
    citiesId: string;
    loadingHidden: boolean;
    applicationVisible: boolean;
    weatherInfo: Iweather;
    wheaterList: Array<IweatherList> = [];

    constructor(
        private weatherService: WheatherService,
        private cityService: CityService,
        private temperatureService: TemperatureService,
        private colorsService: ColorsService,
        private storageService: StorageService,
        private timerService: TimerService
    ) {
        this.citiesId = '';
        this.applicationVisible = false;
        this.loadingHidden = false;
    }

    private onGetCitiesIdHandler(cities: Array<Icity>): string {
        const ids = cities.map((city: Icity) => city.id);
        return ids.toString();        
    }
    onSetValuesHandler(info: Iweather): void {
        this.loadingHidden = true;
        this.applicationVisible = true;
        this.weatherInfo = info;
    }

    onCheckDataHandler(): void {
        if(this.storageService.checkStorageContent()) {
            this.onSetValuesHandler(JSON.parse(this.storageService.getCitiesData()));
        }
        else {
            this.cityService.loadingCitiesResults()
                .subscribe((cities: Array<Icity>) => {
                    this.citiesId = this.onGetCitiesIdHandler(cities);
                    
                    this.weatherService.loadingWeatherResults(this.citiesId)
                        .subscribe((weatherResponse: Iweather) => {
                            this.onSetValuesHandler(weatherResponse);
                            this.storageService.setCitiesData(weatherResponse);
                        },
                        (error: Error) => console.log(`error on "weatherService.loadingWeatherResults": ${error}`),
                        () => console.log('completed'));
                });
        }
    }

    ngOnInit() {
        this.onCheckDataHandler();
    }
}
