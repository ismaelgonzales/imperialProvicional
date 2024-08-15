import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
    selector: 'app-delete-account',
    templateUrl: './delete-account.component.html',
    styleUrl: './delete-account.component.scss',
})
export class DeleteAccountComponent {
    constructor(private dlgRef: DialogRef) {}

    public closeModal(): void {
        this.dlgRef.close(false);
    }
}
