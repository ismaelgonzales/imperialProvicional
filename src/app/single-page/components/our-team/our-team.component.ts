import { Component } from '@angular/core';
import { ITeam } from '../../interfaces/team.interface';

@Component({
    selector: 'app-our-team',
    templateUrl: './our-team.component.html',
    styleUrl: './our-team.component.scss',
})
export class OurTeamComponent {
    public dataTeam: ITeam[] = [
        {
            id: 1,
            name: 'Nuestra Flota',
            position: 'Huancayo-Lima',
            prefixPhone: false,
            phoneNumber: '999999999',
            email: 'Contamos con la flota de bus más moderna en Perú para garantizar un viaje cómodo y tranquilo.',
            img: '../../../../assets/img/imperial/team/bus.PNG',
        },
        {
            id: 2,
            name: 'Corporativos y concesionarios',
            position: '',
            prefixPhone: true,
            prefixPhoneNumber: '+02 (23)',
            phoneNumber: '88888888',
            email: 'Autobuses de excelente calidad a precios asequibles',
            img: '../../../../assets/img/imperial/team/conductor.PNG',
        },
        {
            id: 3,
            name: 'Destinos',
            position:
                'Cotiza nuestro servicio corporativo y garantiza un viaje seguro a tu empresa',
            prefixPhone: true,
            prefixPhoneNumber: '+01 (40)',
            phoneNumber: '88888888',
            email: '¡Enamórate más del Perú!Aquí podrás conocer un poco más de cada destino al que vamos.',
            img: '../../../../assets/img/imperial/team/corporativo.PNG',
        },
        {
            id: 4,
            name: 'Carga corporativa',
            position: 'Imperial Cargo',
            prefixPhone: true,
            prefixPhoneNumber: '+01 (40)',
            phoneNumber: '66666',
            email: 'Llevamos tus encomiendas con cuidado',
            img: '../../../../assets/img/imperial/team/encomienda.PNG',
        },
    ];
}
