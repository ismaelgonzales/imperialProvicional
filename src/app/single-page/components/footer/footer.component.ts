import { Component } from '@angular/core';
import * as sharedConstants from '../../../shared/constants';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
})
export class FooterComponent {
    public sharedConstants: typeof sharedConstants = sharedConstants;
}
