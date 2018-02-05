import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundReceiptDetailComponent } from './inbound-receipt-detail.component';

describe('InboundReceiptDetailComponent', () => {
  let component: InboundReceiptDetailComponent;
  let fixture: ComponentFixture<InboundReceiptDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundReceiptDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundReceiptDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
