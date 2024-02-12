import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavService } from '../../services/nav.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
    private breakpointObserver = inject(BreakpointObserver);
    public isSidebarVisible$ = this.navService.isSidebarVisible$;

    get isSidebarVisible(): string {
        return this.isSidebarVisible$
            ? 'margin-left: 200px'
            : 'margin-left: 0px';
    }

    constructor(private navService: NavService) {}

    isHandset$: Observable<boolean> = this.breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );
}
