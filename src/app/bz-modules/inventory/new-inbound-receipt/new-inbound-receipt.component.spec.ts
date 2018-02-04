import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInboundReceiptComponent } from './new-inbound-receipt.component';

describe('NewInboundReceiptComponent', () => {
  let component: NewInboundReceiptComponent;
  let fixture: ComponentFixture<NewInboundReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInboundReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInboundReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
