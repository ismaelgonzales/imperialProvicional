import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesactivateComponent } from './desactivate.component';

describe('DesactivateComponent', () => {
    let component: DesactivateComponent;
    let fixture: ComponentFixture<DesactivateComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DesactivateComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(DesactivateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
