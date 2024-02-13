import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracionesRoutingModule } from './configuraciones-routing.module';
import { ConfiguracionesComponent } from './configuraciones.component';
import { MatIconModule } from '@angular/material/icon';
import { IconService } from '../../shared/services/icon.service';

@NgModule({
    declarations: [ConfiguracionesComponent],
    imports: [CommonModule, ConfiguracionesRoutingModule, MatIconModule],
})
export class ConfiguracionesModule {}
