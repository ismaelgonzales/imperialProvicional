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
import { FindmeComponent } from './single-page/components/findme/findme.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderContentComponent } from './shared/components/header-content/header-content.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { MyProfileComponent } from './shared/components/my-profile/my-profile.component';
import { NaturalPersonFormComponent } from './shared/components/my-profile/elements/natural-person-form/natural-person-form.component';
import { LegalEntityFormComponent } from './shared/components/my-profile/elements/legal-entity-form/legal-entity-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CdkDrag } from '@angular/cdk/drag-drop';

register();

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        DashboardComponent,
        ContentComponent,
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
        HeaderContentComponent,
        MyProfileComponent,
        NaturalPersonFormComponent,
        LegalEntityFormComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatSelectModule,
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
        MatProgressSpinnerModule,
        CdkDrag,
    ],
    providers: [
        provideAnimationsAsync(),
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: { appearance: 'outline' },
        },
        IconService,
        JwtHelperService,
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
