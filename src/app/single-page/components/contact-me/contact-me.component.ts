import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as constantsShared from '../../../shared/constants';

@Component({
    selector: 'app-contact-me',
    templateUrl: './contact-me.component.html',
    styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
    public contactMeForm!: FormGroup;
    public constantsShared: typeof constantsShared = constantsShared;

    constructor(private fb: FormBuilder) {
        this.initialForm();
    }

    private initialForm(): void {
        this.contactMeForm = this.fb.group({
            nombre: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            mensaje: ['', Validators.required],
        });
    }
}
