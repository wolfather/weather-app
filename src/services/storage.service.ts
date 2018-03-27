import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {
    private wl = window.localStorage;
    private CITY_DATA: string = 'citiesData';

    private checkSupport(): boolean {
        return !!this.wl;
    }

    setCitiesData(data: string): void {
        this.checkSupport() && this.wl.setItem(this.CITY_DATA, data);
    }
    
    getCitiesData(): string {
        return this.checkSupport() && this.wl.getItem(this.CITY_DATA);
    }
    checkStorageContent(): boolean {
        return !!this.wl[this.CITY_DATA];
    }

    delCitiesData(): void {
        this.checkSupport() && this.wl.removeItem(this.CITY_DATA);
    }
}