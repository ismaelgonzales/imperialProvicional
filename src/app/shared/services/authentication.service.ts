import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    constructor(private jwtHelper: JwtHelperService) {}

    public comprobateToken() {
        const token = localStorage.getItem('token');

        if (!token) {
            return false;
        }

        const isExpired = this.jwtHelper.isTokenExpired(token);

        if (isExpired) {
            return false;
        }

        const decodedToken = this.jwtHelper.decodeToken(token);

        if (decodedToken?.email != localStorage.getItem('email')) {
            return false;
        }

        return true;
    }

    public loggeIn(): boolean {
        return !!localStorage.getItem('token');
    }
}
