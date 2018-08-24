import { TestBed, inject } from '@angular/core/testing';

import { PrecommitmentService } from './precommitment.service';

describe('PrecommitmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrecommitmentService]
    });
  });

  it('should be created', inject([PrecommitmentService], (service: PrecommitmentService) => {
    expect(service).toBeTruthy();
  }));
});
