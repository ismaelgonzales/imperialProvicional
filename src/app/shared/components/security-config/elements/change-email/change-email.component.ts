import { Component } from '@angular/core';
import { formAnimation } from '../../../../data/forms-animation/forms-animation';

@Component({
    selector: 'app-change-email',
    templateUrl: './change-email.component.html',
    styleUrl: './change-email.component.scss',
    animations: [formAnimation],
})
export class ChangeEmailComponent {
    public formVisible: boolean = false;
    public iconKeyboard: boolean = false;

    get iconKeyboardArrow(): string {
        return this.formVisible ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    }

    public toggleForm() {
        this.formVisible = !this.formVisible;
    }
}
