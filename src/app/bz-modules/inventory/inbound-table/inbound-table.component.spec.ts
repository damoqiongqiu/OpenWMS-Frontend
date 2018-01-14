import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundTableComponent } from './inbound-table.component';

describe('InboundTableComponent', () => {
  let component: InboundTableComponent;
  let fixture: ComponentFixture<InboundTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InboundTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});