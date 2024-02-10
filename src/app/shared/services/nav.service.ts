import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NavService {
    private isSidebarVisible = new BehaviorSubject<boolean>(true);
    isSidebarVisible$ = this.isSidebarVisible.asObservable();

    public toggleSidebarVisibility() {
        this.isSidebarVisible.next(!this.isSidebarVisible.value);
    }
}
