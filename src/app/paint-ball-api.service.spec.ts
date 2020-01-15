import { TestBed } from '@angular/core/testing';

import { PaintBallApiService } from './paint-ball-api.service';

describe('PaintBallApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaintBallApiService = TestBed.get(PaintBallApiService);
    expect(service).toBeTruthy();
  });
});
