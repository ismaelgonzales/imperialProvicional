import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IDataSlider } from '../../interfaces';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrl: './slider.component.scss',
})
export class SliderComponent {
    public slides: IDataSlider[] = [
        {
            id: 1,
            src: '../../../assets/img/singlePage/slider/slide1.png',
            title: 'Cuentas Claras SAC',
            subtitle: true,
            subtitleText: 'Sube tus archivos ahora mismo y cotiza',
            button: true,
            buttonText: 'Ingresar',
            route: '/login',
        },
        {
            id: 2,
            src: '../../../assets/img/singlePage/slider/slide2.jpg',
            title: 'Ingresa a nuestra intranet',
            subtitle: true,
            subtitleText: 'Sube tus archivos ahora mismo y cotiza',
            button: false,
        },
        {
            id: 3,
            src: '../../../assets/img/singlePage/slider/slide2.jpg',
            title: 'Registrare en nuestra intranet',
            subtitle: true,
            subtitleText: 'No te pierdas las novedades',
            button: true,
            buttonText: 'Registrate',
            route: '/registrate',
        },
    ];

    constructor(private _router: Router) {}

    public nav(id: number) {
        const resultNav = this.slides.filter(
            (elemento: IDataSlider) => elemento.id === id
        )[0];

        this._router.navigate([resultNav.route]);
    }
}
