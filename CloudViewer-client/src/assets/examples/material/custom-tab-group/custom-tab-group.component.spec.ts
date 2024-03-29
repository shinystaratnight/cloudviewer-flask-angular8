import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTabGroupComponent } from './custom-tab-group.component';

describe('CustomTabGroupComponent', () => {
  let component: CustomTabGroupComponent;
  let fixture: ComponentFixture<CustomTabGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTabGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
