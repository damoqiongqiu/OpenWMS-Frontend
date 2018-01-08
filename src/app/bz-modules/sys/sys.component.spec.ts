import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysComponent } from './sys.component';

describe('SysComponent', () => {
  let component: SysComponent;
  let fixture: ComponentFixture<SysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
