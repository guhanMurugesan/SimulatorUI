import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectupdateComponent } from './objectupdate.component';

describe('ObjectupdateComponent', () => {
  let component: ObjectupdateComponent;
  let fixture: ComponentFixture<ObjectupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
