import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiBoxComponent } from './emoji-box.component';

describe('EmojiBoxComponent', () => {
  let component: EmojiBoxComponent;
  let fixture: ComponentFixture<EmojiBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojiBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
