import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ContentComponent } from './shared/components/layout/content/content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import {
    MAT_FORM_FIELD_DEFAULT_OPTIONS,
    MatFormFieldModule,
} from '@angular/material/form-field';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { SingleComponent } from './shared/components/layout/single/single.component';
import { HeaderComponent } from './single-page/components/header/header.component';
import { FooterComponent } from './single-page/components/footer/footer.component';
import { IconService } from './shared/services/icon.service';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './single-page/components/slider/slider.component';
import { register } from 'swiper/element/bundle';
import { ServicesConComponent } from './single-page/components/services-con/services-con.component';
import { OurTeamComponent } from './single-page/components/our-team/our-team.component';
import { SuccessCaseComponent } from './single-page/components/success-case/success-case.component';
import { ContactMeComponent } from './single-page/components/contact-me/contact-me.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FindmeComponent } from './single-page/components/findme/findme.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthInterceptorProviders } from './auth/interceptors/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

register();

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        RegisterComponent,
        DashboardComponent,
        ContentComponent,
        LoginComponent,
        SingleComponent,
        HeaderComponent,
        FooterComponent,
        SliderComponent,
        ServicesConComponent,
        OurTeamComponent,
        SuccessCaseComponent,
        ContactMeComponent,
        FindmeComponent,
        SpinnerComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        NgbModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        HttpClientModule,
        NgxSpinnerModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
    ],
    providers: [
        AuthInterceptorProviders,
        provideAnimationsAsync(),
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: { appearance: 'outline' },
        },
        IconService,
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
