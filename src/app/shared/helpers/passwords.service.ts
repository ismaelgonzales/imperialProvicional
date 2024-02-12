import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class PasswordsService {
    constructor() {}

    public passwordMatching(
        password: string | null,
        passwordRepeat: string | null
    ) {
        if (!password || !passwordRepeat) return { isValid: false };

        if (password != passwordRepeat) return { isValid: false };

        return null;
    }

    public passwordSecurity(password: string): ValidationErrors | null {
        const desglose = password.split('');
        const validator = desglose.some(elemento => {
            const esCaracterEspecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(
                elemento
            );
            return esCaracterEspecial;
        });

        if (validator) return null;
        return {
            isValid: false,
        };
    }
}
