import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOutboundReceiptComponent } from './new-outbound-receipt.component';

describe('NewOutboundReceiptComponent', () => {
  let component: NewOutboundReceiptComponent;
  let fixture: ComponentFixture<NewOutboundReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOutboundReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOutboundReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
