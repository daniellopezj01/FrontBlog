import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUpdateCommentsComponent } from './insert-update-comments.component';

describe('InsertUpdateCommentsComponent', () => {
  let component: InsertUpdateCommentsComponent;
  let fixture: ComponentFixture<InsertUpdateCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertUpdateCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertUpdateCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
