import { TestBed } from '@angular/core/testing';

import { Doacao } from './doacao';

describe('Doacao', () => {
  let service: Doacao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Doacao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
