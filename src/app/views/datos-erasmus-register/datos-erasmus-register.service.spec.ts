import { TestBed } from '@angular/core/testing';

import { DatosErasmusRegisterService } from './datos-erasmus-register.service';

describe('DatosErasmusRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosErasmusRegisterService = TestBed.get(DatosErasmusRegisterService);
    expect(service).toBeTruthy();
  });
});
