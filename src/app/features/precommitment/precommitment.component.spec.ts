import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecommitmentComponent } from './precommitment.component';

describe('PrecommitmentComponent', () => {
  let component: PrecommitmentComponent;
  let fixture: ComponentFixture<PrecommitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecommitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecommitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
