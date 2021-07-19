import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyPanicsComponent } from './loyalty-panics.component';

describe('LoyaltyPanicsComponent', () => {
  let component: LoyaltyPanicsComponent;
  let fixture: ComponentFixture<LoyaltyPanicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyaltyPanicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyPanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
