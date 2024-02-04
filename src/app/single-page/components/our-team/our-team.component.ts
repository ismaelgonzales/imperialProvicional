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
            name: 'Adolfo Martinez',
            position: 'Desarrollador FullStack',
            prefixPhone: false,
            phoneNumber: '999999999',
            email: 'ejemplo@ejemplo.com',
            img: '../../../../assets/img/singlePage/team/member1.jpg',
        },
        {
            id: 2,
            name: 'Diego Sandobal',
            position: 'Analista de datos',
            prefixPhone: true,
            prefixPhoneNumber: '+02 (23)',
            phoneNumber: '88888888',
            email: 'ejemplo@ejemplo.com',
            img: '../../../../assets/img/singlePage/team/member2.jpg',
        },
        {
            id: 3,
            name: 'Percy Garcia',
            position: 'Desarrollador mobile',
            prefixPhone: true,
            prefixPhoneNumber: '+01 (40)',
            phoneNumber: '88888888',
            email: 'ejemplo@ejemplo.com',
            img: '../../../../assets/img/singlePage/team/member3.png',
        },
        {
            id: 3,
            name: 'Jorge Garcia',
            position: 'Desarrollador mobile',
            prefixPhone: true,
            prefixPhoneNumber: '+01 (40)',
            phoneNumber: '66666',
            email: 'ejemplo@ejemplo.com',
            img: '../../../../assets/img/singlePage/team/member4.jpg',
        },
    ];
}
