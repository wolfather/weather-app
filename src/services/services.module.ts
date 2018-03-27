import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';

import { TemperatureService } from './temperature.service';
import { ColorsService } from './colors.service';
import { StorageService } from './storage.service';
import { TimerService } from './timer.service';
import { ErrorMessageService } from './errormessage.service';

@NgModule({
    imports: [CommonModule]
})
export class ServicesModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: ServicesModule,
            providers: [
                TemperatureService,
                ColorsService,
                StorageService,
                TimerService,
                ErrorMessageService
            ]
        };
    }
}