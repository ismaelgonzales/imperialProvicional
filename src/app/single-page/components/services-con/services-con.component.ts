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
            title: 'Llegadas Puntuales',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 2,
            icon: 'mobile_icon',
            title: 'Wifi 5G',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 3,
            icon: 'pin_icon',
            title: 'Destinos',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ];
}
