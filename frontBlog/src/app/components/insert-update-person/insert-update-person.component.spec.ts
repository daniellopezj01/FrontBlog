import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUpdatePersonComponent } from './insert-update-person.component';

describe('InsertUpdatePersonComponent', () => {
  let component: InsertUpdatePersonComponent;
  let fixture: ComponentFixture<InsertUpdatePersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertUpdatePersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertUpdatePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
