import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TransformValueService {
    constructor() {}

    public onlyNumber(event: any): boolean {
        const charCode = event.which ?? event.keyCode;

        if (charCode >= 48 && charCode <= 57) {
            return true;
        }
        return false;
    }

    public onlyLetter(event: any): boolean {
        const charCode = event.which ?? event.keyCode;

        if (
            (charCode >= 65 && charCode <= 90) ||
            (charCode >= 97 && charCode <= 122)
        ) {
            return true;
        }

        return false;
    }
}
