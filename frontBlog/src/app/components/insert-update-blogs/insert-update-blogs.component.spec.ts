import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUpdateBlogsComponent } from './insert-update-blogs.component';

describe('InsertUpdateBlogsComponent', () => {
  let component: InsertUpdateBlogsComponent;
  let fixture: ComponentFixture<InsertUpdateBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertUpdateBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertUpdateBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
