import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTableComponent } from './post-table.component';

describe('PostTableComponent', () => {
  let component: PostTableComponent;
  let fixture: ComponentFixture<PostTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
