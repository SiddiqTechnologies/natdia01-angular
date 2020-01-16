import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhoursComponent } from './addhours.component';

describe('AddhoursComponent', () => {
  let component: AddhoursComponent;
  let fixture: ComponentFixture<AddhoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
