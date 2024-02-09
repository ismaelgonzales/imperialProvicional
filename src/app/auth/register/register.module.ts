import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthInterceptorProviders } from '../interceptors/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './services/register.service';
import { register } from 'swiper/element/bundle';
import { RegisterRoutingModule } from './register-routing.module';

register();
@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule, RegisterRoutingModule],
    providers: [AuthInterceptorProviders, RegisterService],
})
export class RegisterModule {}
