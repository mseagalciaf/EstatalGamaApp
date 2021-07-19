import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesCentralComponent } from './issues-central.component';

describe('IssuesCentralComponent', () => {
  let component: IssuesCentralComponent;
  let fixture: ComponentFixture<IssuesCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuesCentralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
