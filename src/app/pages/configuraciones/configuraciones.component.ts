import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyProfileComponent } from '../../shared/components/my-profile/my-profile.component';
import { SecurityConfigComponent } from '../../shared/components/security-config/security-config.component';
import { DeleteAccountComponent } from '../../shared/components/delete-account/delete-account.component';

@Component({
    selector: 'app-configuraciones',
    templateUrl: './configuraciones.component.html',
    styleUrl: './configuraciones.component.scss',
})
export class ConfiguracionesComponent {
    options = [
        {
            id: 1,
            icon: 'person',
            title: 'Mi Perfil',
            description:
                'Podras configurar tu perfil de manera rapida, con tu cuenta RUC',
        },
        {
            id: 2,
            icon: 'security',
            title: 'Seguridad',
            description:
                'Podras resetear tu contrasena o cambiar tu correo electronico',
        },
        {
            id: 3,
            icon: 'account_circle',
            title: 'Desactivar cuenta',
            description:
                'Aqui podras desactivar temporalmente o eliminar tu cuenta de manera permanente ',
        },
    ];
    constructor(private dlgref: MatDialog) {}

    public onRouteOption(id: number): void {
        switch (id) {
            case 1:
                this.dlgref.open(MyProfileComponent, {
                    maxHeight: '90vh',
                    width: '70vh',
                    disableClose: true,
                });
                break;
            case 2:
                this.dlgref.open(SecurityConfigComponent, {
                    maxHeight: '90vh',
                    width: '70vh',
                    disableClose: true,
                });
                break;
            case 3:
                this.dlgref.open(DeleteAccountComponent, {
                    maxHeight: '90vh',
                    width: '70vh',
                    disableClose: true,
                });
                break;
        }
    }
}
