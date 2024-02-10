import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    API_VERSION,
    PATH_SEGURIDAD,
} from '../../../shared/constants/path.constant';
import { ILoginParams } from '../interfaces/login.interface';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(private _http: HttpClient) {}

    public login(loginData: ILoginParams) {
        return this._http.post(
            `${API_VERSION}/${PATH_SEGURIDAD}/auth/login`,
            loginData
        );
    }
}
