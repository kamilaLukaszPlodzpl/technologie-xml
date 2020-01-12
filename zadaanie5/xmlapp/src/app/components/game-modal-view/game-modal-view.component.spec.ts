import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameModalViewComponent } from './game-modal-view.component';

describe('GameModalViewComponent', () => {
  let component: GameModalViewComponent;
  let fixture: ComponentFixture<GameModalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameModalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameModalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
