import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-success-case',
    templateUrl: './success-case.component.html',
    styleUrl: './success-case.component.scss',
})
export class SuccessCaseComponent {
    constructor(private _router: Router) {}

    public onRouteRegister(): void {
        this._router.navigate(['/registrate']);
    }
}
