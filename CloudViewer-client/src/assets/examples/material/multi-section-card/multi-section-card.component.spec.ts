import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSectionCardComponent } from './multi-section-card.component';

describe('MultiSectionCardComponent', () => {
  let component: MultiSectionCardComponent;
  let fixture: ComponentFixture<MultiSectionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSectionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
