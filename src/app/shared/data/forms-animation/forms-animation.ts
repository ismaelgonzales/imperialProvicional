import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';

export const formAnimation = trigger('formAnimation', [
    state(
        'visible',
        style({
            opacity: 1,
        })
    ),
    state(
        'hidden',
        style({
            opacity: 0,
        })
    ),
    transition('visible <=> hidden', animate('0.3s ease-in-out')),
]);
