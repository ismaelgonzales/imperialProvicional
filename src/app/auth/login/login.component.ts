import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minLengthContrasena } from '../../shared/constants';
import * as constantsShared from '../../shared/constants';
import { ILoginParams } from './interfaces/login.interface';
import { SubSink } from 'subsink';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    private subs = new SubSink();
    public loginForm!: FormGroup;
    public constantsShared: typeof constantsShared = constantsShared;
    public spinner: boolean = false;

    constructor(
        private fb: FormBuilder,
        private loginService: LoginService,
        private readonly _router: Router,
        private toastr: ToastrService
    ) {
        this.initialForm();
    }

    private isLogin(): void {}

    private initialForm(): void {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: [
                '',
                [
                    Validators.required,
                    Validators.minLength(minLengthContrasena),
                ],
            ],
        });
    }

    public login(): void {
        this.spinner = true;
        const loginParams: ILoginParams = this.loginForm.value;

        this.subs.sink = this.loginService.login(loginParams).subscribe(
            (response: any) => {
                console.log(response);
                this.toastr.success(response.message);
                this.spinner = false;
                this._router.navigate(['/intranet']);
            },
            error => {
                this.spinner = false;
                this.toastr.error(
                    error.error.message,
                    constantsShared.TITLE_ERROR
                );
            }
        );
    }
}
