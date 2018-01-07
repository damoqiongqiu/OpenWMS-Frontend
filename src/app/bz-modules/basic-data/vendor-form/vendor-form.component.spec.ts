import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorFormComponent } from './vendor-form.component';

describe('VendorFormComponent', () => {
  let component: VendorFormComponent;
  let fixture: ComponentFixture<VendorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
