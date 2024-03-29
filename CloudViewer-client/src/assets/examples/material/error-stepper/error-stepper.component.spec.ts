import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorStepperComponent } from './error-stepper.component';

describe('ErrorStepperComponent', () => {
  let component: ErrorStepperComponent;
  let fixture: ComponentFixture<ErrorStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
