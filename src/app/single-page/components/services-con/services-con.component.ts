import { Component } from '@angular/core';
import { IDataService } from '../../interfaces';

@Component({
    selector: 'app-services-con',
    templateUrl: './services-con.component.html',
    styleUrl: './services-con.component.scss',
})
export class ServicesConComponent {
    public dataServices: IDataService[] = [
        {
            id: 1,
            icon: 'clock_icon',
            title: 'Asesoria',
            text: 'Los servicios de auditoría están diseñados para ayudar a su empresa a mitigar riesgos, crear nuevas eficiencias y apoyar mejor los objetivos estratégicos.',
        },
        {
            id: 2,
            icon: 'mobile_icon',
            title: 'Registro Contable',
            text: 'Los servicios de auditoría están diseñados para ayudar a su empresa a mitigar riesgos, crear nuevas eficiencias y apoyar mejor los objetivos estratégicos.',
        },
        {
            id: 3,
            icon: 'pin_icon',
            title: 'Registro SUNAT',
            text: 'Los servicios de auditoría están diseñados para ayudar a su empresa a mitigar riesgos, crear nuevas eficiencias y apoyar mejor los objetivos estratégicos.',
        },
    ];
}
