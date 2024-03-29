import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledSelectComponent } from './disabled-select.component';

describe('DisabledSelectComponent', () => {
  let component: DisabledSelectComponent;
  let fixture: ComponentFixture<DisabledSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabledSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
