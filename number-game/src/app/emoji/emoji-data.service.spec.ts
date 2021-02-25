import { TestBed } from '@angular/core/testing';

import { EmojiDataService } from './emoji-data.service';

describe('EmojiDataService', () => {
  let service: EmojiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmojiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
