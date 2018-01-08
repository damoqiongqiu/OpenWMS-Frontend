import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LossFormComponent } from './loss-form.component';

describe('LossFormComponent', () => {
  let component: LossFormComponent;
  let fixture: ComponentFixture<LossFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LossFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LossFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
