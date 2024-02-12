import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CANCELAR_REGISTRO } from '../../shared/constants';
import * as constansShared from '../../shared/constants';
import { Router } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    public loginForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private _router: Router
    ) {
        this.initialForm();
    }

    private initialForm(): void {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            contrasena: ['', Validators.required],
        });
    }
    public cancelar(): void {
        Swal.fire(CANCELAR_REGISTRO).then(result => {
            if (result.isConfirmed) this._router.navigate(['/']);
        });
    }
}
