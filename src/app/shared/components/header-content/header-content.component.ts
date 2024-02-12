import { Component } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header-content',
    templateUrl: './header-content.component.html',
    styleUrl: './header-content.component.scss',
})
export class HeaderContentComponent {
    constructor(
        private navService: NavService,
        private _router: Router
    ) {}
    public valida = true;

    get maxHorizontal(): string {
        return this.valida ? 'margin-left: 200px' : 'margin-left: 0px';
    }

    public toggle(): void {
        this.valida = !this.valida;
        this.navService.toggleSidebarVisibility();
    }

    public logOut(): void {
        localStorage.clear();
        this._router.navigate(['/']);
    }
}
