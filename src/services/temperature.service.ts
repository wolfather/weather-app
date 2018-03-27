import { Injectable } from "@angular/core";

@Injectable()
export class TemperatureService {
    convertKelvinToCelsius(num: number): string {
        return (num - 273.15).toFixed(2).toString();
    }
}