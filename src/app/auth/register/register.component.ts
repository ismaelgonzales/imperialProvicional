import { Component } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import { TransformValueService } from '../../shared/helpers/transform-value.service';
import * as constansShared from '../../shared/constants';
import { Router } from '@angular/router';
import { IParamsRegistro } from './interfaces';
import { minLengthContrasena } from '../../shared/constants/datos.constants';
import Swal from 'sweetalert2';
import { CANCELAR_REGISTRO } from '../../shared/constants';
import { PasswordsService } from '../../shared/helpers/passwords.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
})
export class RegisterComponent {
    public loginForm!: FormGroup<IParamsRegistro>;
    public constantsShared: typeof constansShared = constansShared;

    constructor(
        private fb: FormBuilder,
        private helperTransformValue: TransformValueService,
        private _router: Router,
        private helperPassword: PasswordsService
    ) {
        this.initialForm();
    }

    private initialForm(): void {
        this.loginForm = this.fb.group({
            correo: ['', [Validators.required, Validators.email]],
            contrasena: [
                '',
                [
                    Validators.required,
                    Validators.minLength(minLengthContrasena),
                    this.validContrasenaCharacterSpecial(),
                ],
            ],
            contrasenaRepeat: [
                '',
                [Validators.required, this.validContrasenaMatch()],
            ],
        });
    }

    private validContrasenaCharacterSpecial() {
        return (control: AbstractControl) => {
            return this.helperPassword.passwordSecurity(control.value);
        };
    }

    private validContrasenaMatch() {
        return (control: AbstractControl) => {
            const password = this.loginForm?.controls['contrasena']?.value;
            const passwordRepeat = control.value;

            return this.helperPassword.passwordMatching(
                password,
                passwordRepeat
            );
        };
    }

    public onlyNumber(event: KeyboardEvent): boolean {
        return this.helperTransformValue.onlyNumber(event);
    }

    public onlyLetter(event: KeyboardEvent): boolean {
        return this.helperTransformValue.onlyLetter(event);
    }

    public cancelar(): void {
        Swal.fire(CANCELAR_REGISTRO).then(result => {
            if (result.isConfirmed) this._router.navigate(['/']);
        });
    }

    public registrar(): void {
        const params = this.loginForm.value;
    }
}
