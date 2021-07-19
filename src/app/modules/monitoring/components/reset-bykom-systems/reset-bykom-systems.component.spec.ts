import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetBykomSystemsComponent } from './reset-bykom-systems.component';

describe('ResetBykomSystemsComponent', () => {
  let component: ResetBykomSystemsComponent;
  let fixture: ComponentFixture<ResetBykomSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetBykomSystemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetBykomSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
