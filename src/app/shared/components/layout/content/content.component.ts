import { Component } from '@angular/core';
import { fadeInAnimation } from '../../../data/router-animation/router-animation';
import { NavService } from '../../../services/nav.service';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss',
    animations: [fadeInAnimation],
})
export class ContentComponent {
    constructor(private navService: NavService) {}
    public isSidebarVisible$ = this.navService.isSidebarVisible$;

    public getRouterOutletState(outlet: any) {
        return outlet.isActivated ? outlet.activatedRoute : null;
    }
}
