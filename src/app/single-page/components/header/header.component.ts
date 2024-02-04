import { Component, HostListener } from '@angular/core';
import * as constantShared from '../../../shared/constants';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    public constantShared: typeof constantShared = constantShared;

    shouldApplyFixedHeader = false;

    @HostListener('window:scroll', ['$event'])
    onScroll() {
        this.shouldApplyFixedHeader = window.scrollY > 100;
    }

    constructor(private _router: Router) {}

    public onRouteLogin(): void {
        this._router.navigate(['login']);
    }
}
