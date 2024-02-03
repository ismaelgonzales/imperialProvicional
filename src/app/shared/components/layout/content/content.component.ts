import { Component } from '@angular/core';
import { fadeInAnimation } from '../../../data/router-animation/router-animation';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss',
    animations: [fadeInAnimation],
})
export class ContentComponent {
    public getRouterOutletState(outlet: any) {
        return outlet.isActivated ? outlet.activatedRoute : null;
    }
}
