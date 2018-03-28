import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-loader-component',
    templateUrl: './loader.template.html',
    styleUrls: ['./loader.style.css']
})
export class LoaderComponent {
    @Input() isHidden: boolean = false;

    constructor() {
        console.log('loader is loaded');
    }
}
