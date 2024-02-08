import { FormControl } from '@angular/forms';

export interface IParamsRegistro {
    correo: FormControl<string | null>;
    contrasena: FormControl<string | null>;
    contrasenaRepeat: FormControl<string | null>;
}
