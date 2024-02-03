import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TransformValueService {
    constructor() {}

    public onlyNumber(event: KeyboardEvent): boolean {
        const charCode = event.key.charCodeAt(0);

        if (charCode >= 48 && charCode <= 57) {
            return true;
        }
        return false;
    }

    public onlyLetter(event: KeyboardEvent): boolean {
        const charCode = event.key.charCodeAt(0);

        if (
            (charCode >= 65 && charCode <= 90) ||
            (charCode >= 97 && charCode <= 122)
        ) {
            return true;
        }

        return false;
    }
}
