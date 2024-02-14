import { Component } from '@angular/core';
import { IconService } from '../../shared/services/icon.service';
import { MatDialog } from '@angular/material/dialog';
import { MyProfileComponent } from '../../shared/components/my-profile/my-profile.component';
import { SecurityConfigComponent } from '../../shared/components/security-config/security-config.component';

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
                    height: '90%',
                    width: '40%',
                    disableClose: true,
                });
                break;
            case 2:
                this.dlgref.open(SecurityConfigComponent, {
                    width: '40%',
                    disableClose: true,
                });
        }
    }
}
