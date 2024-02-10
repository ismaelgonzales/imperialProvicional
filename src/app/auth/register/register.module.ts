import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterInterceptorProviders } from './interceptors/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './services/register.service';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        CommonModule,
        HttpClientModule,
        RegisterRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot(),
        MatProgressSpinnerModule,
    ],
    providers: [RegisterInterceptorProviders, RegisterService],
    exports: [RegisterComponent],
})
export class RegisterModule {}
