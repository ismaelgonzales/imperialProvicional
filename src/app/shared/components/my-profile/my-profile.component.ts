import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrl: './my-profile.component.scss',
})
export class MyProfileComponent {
    public selectedOption: boolean = true;
    constructor(private dlfRef: MatDialogRef<MyProfileComponent>) {}

    get colorOptionNatural(): string {
        return this.selectedOption ? 'primary' : '';
    }

    get colorOptionJuridico(): string {
        return this.selectedOption ? '' : 'primary';
    }

    public closeModal(): void {
        this.dlfRef.close(false);
    }

    public personaNatural(): void {
        this.selectedOption = true;
    }

    public personaJuridica(): void {
        this.selectedOption = false;
    }
}
