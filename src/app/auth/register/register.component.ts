import { Component, OnDestroy } from '@angular/core';
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
import { CANCELAR_REGISTRO, TITLE_ERROR } from '../../shared/constants';
import { PasswordsService } from '../../shared/helpers/passwords.service';
import { RegisterService } from './services/register.service';
import { ToastrService } from 'ngx-toastr';
import { SubSink } from 'subsink';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnDestroy {
    private subs = new SubSink();
    public loginForm!: FormGroup;
    public spinner: boolean = false;
    public constantsShared: typeof constansShared = constansShared;

    constructor(
        private fb: FormBuilder,
        private helperTransformValue: TransformValueService,
        private _router: Router,
        private helperPassword: PasswordsService,
        private registerService: RegisterService,
        private toastr: ToastrService
    ) {
        this.initialForm();
    }

    private initialForm(): void {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: [
                '',
                [
                    Validators.required,
                    Validators.minLength(minLengthContrasena),
                    this.validContrasenaCharacterSpecial(),
                ],
            ],
            passwordRepeat: [
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
            const password = this.loginForm?.controls['password']?.value;
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
        this.spinner = true;
        const { email, password }: IParamsRegistro = this.loginForm.value;

        this.subs.sink = this.registerService
            .register({ email, password })
            .subscribe(
                (response: any) => {
                    this.spinner = false;
                    this.toastr.success(response.message);
                    this._router.navigate(['/login']);
                },
                error => {
                    this.spinner = false;
                    this.toastr.error(error.error.message, TITLE_ERROR);
                }
            );
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
}
