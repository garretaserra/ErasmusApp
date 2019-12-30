import { TestBed } from '@angular/core/testing';

import { DatosErasmusService } from './datos-erasmus.service';

describe('DatosErasmusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosErasmusService = TestBed.get(DatosErasmusService);
    expect(service).toBeTruthy();
  });
});
