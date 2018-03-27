import { Injectable } from "@angular/core";

@Injectable()
export class ColorsService {
    switchTemperatureColors(temp: number):Object {
        if (temp <= 5) {return {'color':'#69a3ff'};}

        if (temp >= 6 && temp <= 26) {return {'color': '#ff9632'};}
        
        return {'color': '#ed1946'};
    }
}