import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwtchComponent } from './ng-swtch.component';

describe('NgSwtchComponent', () => {
  let component: NgSwtchComponent;
  let fixture: ComponentFixture<NgSwtchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwtchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwtchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
