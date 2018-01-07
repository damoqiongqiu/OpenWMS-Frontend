import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterFormComponent } from './enter-form.component';

describe('EnterFormComponent', () => {
  let component: EnterFormComponent;
  let fixture: ComponentFixture<EnterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
