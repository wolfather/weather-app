import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';

@NgModule({
    imports: [CommonModule],
    declarations: [LoaderComponent],
    exports: [LoaderComponent],
    entryComponents: [LoaderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoaderModule {}