import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    public loginForm!: FormGroup;

    constructor(private fb: FormBuilder) {
        this.initialForm();
    }

    private initialForm(): void {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            contrasena: ['', Validators.required],
        });
    }
}
