import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindmeComponent } from './findme.component';

describe('FindmeComponent', () => {
  let component: FindmeComponent;
  let fixture: ComponentFixture<FindmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindmeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
