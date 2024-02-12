import { Routes } from '@angular/router';
import { SingleComponent } from '../components/layout/single/single.component';
import { LoginComponent } from '../../auth/login/login.component';

export const routeContent: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'single',
        component: SingleComponent,
    },
];
