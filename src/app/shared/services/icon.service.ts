import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environments.dev';
import { Icons } from '../enums/icons.enum';

@Injectable({
    providedIn: 'root',
})
export class IconService {
    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitaizer: DomSanitizer
    ) {}

    public registerIcons(): void {
        this.load(Icons, this.checkEnvironment());
    }

    private load(icons: any, url: string): void {
        Object.keys(icons).forEach(icon => {
            this.matIconRegistry.addSvgIcon(
                icon,
                this.domSanitaizer.bypassSecurityTrustResourceUrl(
                    `${url}/${icons[icon]}.svg`
                )
            );
        });
    }

    private checkEnvironment(): string {
        return environment.production
            ? `${environment.envVar.FRONTEND_URL}/assets/icons`
            : `assets/icons`;
    }
}
