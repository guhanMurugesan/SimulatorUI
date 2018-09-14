import { TestBed, inject } from '@angular/core/testing';

import { GamecapService } from './gamecap.service';

describe('GamecapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamecapService]
    });
  });

  it('should be created', inject([GamecapService], (service: GamecapService) => {
    expect(service).toBeTruthy();
  }));
});
