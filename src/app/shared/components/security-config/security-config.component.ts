import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
    selector: 'app-security-config',
    templateUrl: './security-config.component.html',
    styleUrl: './security-config.component.scss',
})
export class SecurityConfigComponent {
    constructor(private dlgRef: DialogRef) {}

    public closeModal(): void {
        this.dlgRef.close(false);
    }
}
