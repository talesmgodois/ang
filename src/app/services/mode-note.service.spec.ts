import { TestBed } from '@angular/core/testing';

import { ModeNoteService } from './mode-note.service';

describe('ModeNoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModeNoteService = TestBed.get(ModeNoteService);
    expect(service).toBeTruthy();
  });
});
