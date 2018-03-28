import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-topbar-component',
    templateUrl: './topbar.template.html',
    styleUrls: ['./topbar.style.css']
})
export class TopbarComponent {
    constructor(
        private router: Router
    ) {}

    onClickLogoHandler(): void {
        this.router.navigate(['home']);
    }
}