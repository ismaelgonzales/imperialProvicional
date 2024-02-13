import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root',
})
export class ExamineDocsService {
    constructor(private _http: HttpClient) {}

    tokenAPI =
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imx1aXMuaGVybmFuZGV6LmFsYmlhQGdtYWlsLmNvbSJ9.0-rQE2UUwraOq-8iyrvRLkSIzvfH2SBfjf64PjZ8uoc';

    public consultarDNI(dni: string) {
        return this._http.get(
            `https://dniruc.apisperu.com/api/v1/dni/${dni}?token=${this.tokenAPI}`
        );
    }

    public consultarRUC(ruc: string) {
        return this._http.get(
            `https://dniruc.apisperu.com/api/v1/ruc/${ruc}?token=${this.tokenAPI}`
        );
    }
}
