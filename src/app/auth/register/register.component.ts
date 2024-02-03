import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
})
export class RegisterComponent {
    public loginForm!: FormGroup;

    constructor(private fb: FormBuilder) {
        this.initialForm();
    }

    private initialForm(): void {
        this.loginForm = this.fb.group({
            nombre: ['', [Validators.required]],
            apePaterno: ['', Validators.required],
            apeMaterno: ['', Validators.required],
            telefono: [
                '',
                [
                    Validators.required,
                    Validators.minLength(9),
                    Validators.maxLength(9),
                ],
            ],
            correo: ['', Validators.required],
            contrasena: ['', [Validators.required, Validators.minLength(5)]],
        });
    }
}
