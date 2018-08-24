import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamecapComponent } from './gamecap.component';

describe('GamecapComponent', () => {
  let component: GamecapComponent;
  let fixture: ComponentFixture<GamecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamecapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
