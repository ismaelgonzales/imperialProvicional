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
            src: '../../../assets/img/imperial/slider/portada1.jpg',
            title: 'Turismo imperial',
            subtitle: true,
            subtitleText:
                'Preocupados por nuestros pasajeros y colaboradores en brindarles la confianza y garantizarles que estamos cumpliendo con los más altos estándares de calidad en seguridad vial y sanitaria.',
            button: false,
            buttonText: 'Ingresar',
            route: '/login',
        },
        {
            id: 2,
            src: '../../../assets/img/imperial/slider/mimir.jpg',
            title: '',
            subtitle: false,
            subtitleText: '',
            button: false,
        },
        {
            id: 3,
            src: '../../../assets/img/imperial/slider/sorteo.jpg',
            title: '',
            subtitle: false,
            subtitleText: 'No te pierdas las novedades',
            button: false,
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
