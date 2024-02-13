import { Routes } from '@angular/router';
import { SingleComponent } from '../components/layout/single/single.component';
import { LoginComponent } from '../../auth/login/login.component';
import { ConfiguracionesComponent } from '../../pages/configuraciones/configuraciones.component';

export const routeContent: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'configuraciones',
        loadChildren: () =>
            import('../../pages/configuraciones/configuraciones.module').then(
                m => m.ConfiguracionesModule
            ),
    },
];
