import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './shared/components/layout/content/content.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
    {
        path: '',
        component: ContentComponent,
    },
    {
        path: 'registrate',
        component: RegisterComponent,
        data: {
            title: 'Registrate',
        },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
