import { Component } from '@angular/core';
import { IconService } from './shared/services/icon.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    constructor(private readonly _iconService: IconService) {
        this._iconService.registerIcons();
    }

    title = 'frontContaMyPe';
}
