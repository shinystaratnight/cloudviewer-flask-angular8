import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageInputComponent } from './error-message-input.component';

describe('ErrorMessageInputComponent', () => {
  let component: ErrorMessageInputComponent;
  let fixture: ComponentFixture<ErrorMessageInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
