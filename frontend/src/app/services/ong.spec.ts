import { TestBed } from '@angular/core/testing';

import { Ong } from './ong';

describe('Ong', () => {
  let service: Ong;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ong);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
