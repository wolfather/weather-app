import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopbarComponent } from './topbar.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TopbarComponent],
    exports: [TopbarComponent],
    entryComponents: [TopbarComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TopbarModule {}