import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ApiConfigs } from './../configs/api.config';
import { Iweather } from './weather.interface';

@Injectable()
export class WheatherService {
    constructor(private http: HttpClient) {}

    private getWeather(cities: string): Subject<Iweather> {
        const s: Subject<Iweather> = new Subject();

        this.http.get(`${ApiConfigs.GROUP_CITY_API_URL}?id=${cities}&appid=${ApiConfigs.API_KEY}`)
            .subscribe((e: Iweather) => {
                s.next(e);
            },
            (error: Error) => console.log(`error on "getWeather": ${error.message}`),
            () => s.complete());
        return s;
    }

    loadingWeatherResults(citiesId: string): Subject<Iweather> {
        const s: Subject<Iweather> = new Subject<Iweather>();
        
        this.getWeather(citiesId)
            .subscribe((weatherResponse: Iweather) => {
                s.next(weatherResponse);
            },
            (error: Error) => console.log(`error on "loadingWeatherResults": ${error.message}`),
            () => s.complete());
        return s;
    }
}
