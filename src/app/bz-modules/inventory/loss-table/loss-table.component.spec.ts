import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LossTableComponent } from './loss-table.component';

describe('LossTableComponent', () => {
  let component: LossTableComponent;
  let fixture: ComponentFixture<LossTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LossTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LossTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
