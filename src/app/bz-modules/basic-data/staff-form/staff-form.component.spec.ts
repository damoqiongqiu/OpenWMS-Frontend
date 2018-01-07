import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffFormComponent } from './staff-form.component';

describe('StaffFormComponent', () => {
  let component: StaffFormComponent;
  let fixture: ComponentFixture<StaffFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
