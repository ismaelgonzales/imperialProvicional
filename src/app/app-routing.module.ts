import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './shared/components/layout/content/content.component';
import { routeContent } from './shared/routes/routes';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./shared/components/layout/single/single.module').then(
                m => m.SingleModule
            ),
    },
    {
        path: 'intranet',
        component: ContentComponent,
        children: routeContent,
        canActivate: [authGuard],
    },
    {
        path: 'registrate',
        loadChildren: () =>
            import('./auth/register/register.module').then(
                m => m.RegisterModule
            ),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./auth/login/login.module').then(m => m.LoginModule),
        canActivate: [authGuard],
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
