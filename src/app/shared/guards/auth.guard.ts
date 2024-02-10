import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthenticationService);
    const _router = inject(Router);

    if (state.url === '/intranet' && !authService.loggeIn()) {
        _router.navigate(['login']);
        return false;
    }

    if (state.url === '/intranet' && !authService.comprobateToken()) {
        _router.navigate(['login']);
        return false;
    }

    if (state.url === '/login' && authService.loggeIn()) {
        _router.navigate(['/intranet']);
        return true;
    }

    return true;
};
