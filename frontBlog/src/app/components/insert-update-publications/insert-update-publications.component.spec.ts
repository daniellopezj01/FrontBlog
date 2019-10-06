import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUpdatePublicationsComponent } from './insert-update-publications.component';

describe('InsertUpdatePublicationsComponent', () => {
  let component: InsertUpdatePublicationsComponent;
  let fixture: ComponentFixture<InsertUpdatePublicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertUpdatePublicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertUpdatePublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
