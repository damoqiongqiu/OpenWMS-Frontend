import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundTableComponent } from './outbound-table.component';

describe('OutboundTableComponent', () => {
  let component: OutboundTableComponent;
  let fixture: ComponentFixture<OutboundTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
