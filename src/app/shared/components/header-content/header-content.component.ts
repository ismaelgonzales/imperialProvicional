import { Component } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MyProfileComponent } from '../my-profile/my-profile.component';

@Component({
    selector: 'app-header-content',
    templateUrl: './header-content.component.html',
    styleUrl: './header-content.component.scss',
})
export class HeaderContentComponent {
    constructor(
        private navService: NavService,
        private _router: Router,
        private dlgRef: MatDialog
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

    public onRouteConfig(): void {
        this._router.navigate(['intranet/configuraciones']);
    }
}
