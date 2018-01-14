import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundFormComponent } from './inbound-form.component';

describe('InboundFormComponent', () => {
  let component: InboundFormComponent;
  let fixture: ComponentFixture<InboundFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
