import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalPersonFormComponent } from './natural-person-form.component';

describe('NaturalPersonFormComponent', () => {
  let component: NaturalPersonFormComponent;
  let fixture: ComponentFixture<NaturalPersonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NaturalPersonFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NaturalPersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
