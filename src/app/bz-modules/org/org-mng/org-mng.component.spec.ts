import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgMngComponent } from './org-mng.component';

describe('OrgMngComponent', () => {
  let component: OrgMngComponent;
  let fixture: ComponentFixture<OrgMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
