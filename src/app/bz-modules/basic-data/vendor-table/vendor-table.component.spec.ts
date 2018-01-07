import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorTableComponent } from './vendor-table.component';

describe('VendorTableComponent', () => {
  let component: VendorTableComponent;
  let fixture: ComponentFixture<VendorTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
