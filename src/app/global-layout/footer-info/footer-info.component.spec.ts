import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInfoComponent } from './footer-info.component';

describe('FooterInfoComponent', () => {
  let component: FooterInfoComponent;
  let fixture: ComponentFixture<FooterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
