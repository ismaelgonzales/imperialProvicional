import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransformValueService } from '../../shared/helpers/transform-value.service';
import * as constansShared from '../../shared/constants';
import { Router } from '@angular/router';
import { IParamsRegistro } from './interfaces/registro.interface';
import {
    minLengthContrasena,
    minMaxLengthTelefono,
} from '../../shared/constants/datos.constants';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
})
export class RegisterComponent {
    public loginForm!: FormGroup;
    public constantsShared: typeof constansShared = constansShared;

    constructor(
        private fb: FormBuilder,
        private helperTransformValue: TransformValueService,
        private _router: Router
    ) {
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
                    Validators.minLength(minMaxLengthTelefono),
                    Validators.maxLength(minMaxLengthTelefono),
                ],
            ],
            correo: ['', [Validators.required, Validators.email]],
            contrasena: [
                '',
                [
                    Validators.required,
                    Validators.minLength(minLengthContrasena),
                ],
            ],
        });
    }

    public onlyNumber(event: any): boolean {
        return this.helperTransformValue.onlyNumber(event);
    }

    public onlyLetter(event: any): boolean {
        return this.helperTransformValue.onlyLetter(event);
    }

    public cancelar(): void {
        this._router.navigate(['/']);
    }

    public registrar(): void {
        const params: IParamsRegistro = {
            ...this.loginForm.value,
        };

        console.log(params);
    }
}
