import { TestBed } from '@angular/core/testing';

import { CuentaDeAhorrosService } from './cuenta-de-ahorros.service';

describe('CuentaDeAhorrosService', () => {
  let service: CuentaDeAhorrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentaDeAhorrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
