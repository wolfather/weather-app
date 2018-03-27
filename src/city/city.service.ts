import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';

import { Icity } from './city.interface';

@Injectable()
export class CityService {
    simpleCitiesList: Array<string> = ['Nuuk','Urubici','Nairobi','Texas'];
    complexCitiesList: Array<Object> = [
        {city: 'Nuuk', country: 'GL'},
        {city: 'Urubici', country: 'BR'},
        {city: 'Nairobi', country: 'KE'},
        {city: 'Texas', country: 'US'}
    ];
    
    constructor(private http: HttpClient) {}

    getCities(): Subject<Array<Icity>> {
        const s: Subject<Array<Icity>> = new Subject(),
            href = window.location.href;

        this.http.get(`//localhost:4200/assets/city.list.json`)
            .subscribe((cities: Array<Icity>) => {
                s.next(cities);
            }, (error: Error) => console.log(`error on "getCities": ${error.message}`),
            () => s.complete());
        return s;
    }

    private filterCitiesByName(argCities: Array<Icity>): Array<Icity> {
        return argCities.filter(city => this.simpleCitiesList.indexOf(city.name) !== -1);
    }
    
    private filterComplexCitiesListHandler(): Object {
        const DATA = {
            cities: [],
            countries: []
        };
    
        this.complexCitiesList.map((city : Icity) => {
            DATA.cities.push(city['city']);
            DATA.countries.push(city['country']);
        });

        return DATA;
    }

    private filterCitiesByNameCountry(argCities: Array<Icity>): Array<Icity> {
        const CITIES_COUNTRIES = this.filterComplexCitiesListHandler();

        return argCities.filter(city => {
            return CITIES_COUNTRIES['cities'].indexOf(city.name) !== -1 && CITIES_COUNTRIES['countries'].indexOf(city.country) !== -1;
        });
    }

    loadingCitiesResults(): Subject<Array<Icity>> {
        const s: Subject<Array<Icity>> = new Subject<Array<Icity>>();

        this.getCities()
            .subscribe((citiesResponse: Array<Icity>) => {
                s.next(this.filterCitiesByNameCountry(citiesResponse));
            },
            (error: Error) => {
                console.log(`error on "loadingCitiesResults": ${error.message}`);
            },
            () => s.complete());
        return s;
    }
}
