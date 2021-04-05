import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadToolComponent } from './lead-tool.component';

describe('LeadToolComponent', () => {
  let component: LeadToolComponent;
  let fixture: ComponentFixture<LeadToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
