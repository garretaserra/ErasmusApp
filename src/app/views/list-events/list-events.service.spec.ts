import { TestBed } from '@angular/core/testing';

import { ListEventsService } from './list-events.service';

describe('ListEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListEventsService = TestBed.get(ListEventsService);
    expect(service).toBeTruthy();
  });
});
