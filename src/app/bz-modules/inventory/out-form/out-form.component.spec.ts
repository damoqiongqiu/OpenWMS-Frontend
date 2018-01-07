import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutFormComponent } from './out-form.component';

describe('OutFormComponent', () => {
  let component: OutFormComponent;
  let fixture: ComponentFixture<OutFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
