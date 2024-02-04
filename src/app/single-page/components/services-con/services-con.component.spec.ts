import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesConComponent } from './services-con.component';

describe('ServicesConComponent', () => {
    let component: ServicesConComponent;
    let fixture: ComponentFixture<ServicesConComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ServicesConComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ServicesConComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
