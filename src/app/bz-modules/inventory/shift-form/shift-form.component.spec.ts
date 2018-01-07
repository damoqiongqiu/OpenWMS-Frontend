import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftFormComponent } from './shift-form.component';

describe('ShiftFormComponent', () => {
  let component: ShiftFormComponent;
  let fixture: ComponentFixture<ShiftFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
