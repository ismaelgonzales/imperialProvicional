import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    API_VERSION,
    PATH_SEGURIDAD,
    REGISTER,
} from '../../../shared/constants/path.constant';
import { IParamsRegistro } from '../interfaces';

@Injectable({
    providedIn: 'root',
})
export class RegisterService {
    constructor(private _http: HttpClient) {}

    public register(registerData: IParamsRegistro) {
        return this._http.post(
            `${API_VERSION}/${PATH_SEGURIDAD}/${REGISTER}`,
            registerData
        );
    }
}
