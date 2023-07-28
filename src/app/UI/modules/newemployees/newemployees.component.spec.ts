import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewemployeesComponent } from './newemployees.component';

describe('NewemployeesComponent', () => {
  let component: NewemployeesComponent;
  let fixture: ComponentFixture<NewemployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewemployeesComponent]
    });
    fixture = TestBed.createComponent(NewemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
