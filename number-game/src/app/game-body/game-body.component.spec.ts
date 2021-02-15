import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBodyComponent } from './game-body.component';

describe('GameBodyComponent', () => {
  let component: GameBodyComponent;
  let fixture: ComponentFixture<GameBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
