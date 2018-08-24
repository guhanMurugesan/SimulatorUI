import { TestBed, inject } from '@angular/core/testing';

import { JackpotService } from './jackpot.service';

describe('JackpotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JackpotService]
    });
  });

  it('should be created', inject([JackpotService], (service: JackpotService) => {
    expect(service).toBeTruthy();
  }));
});
