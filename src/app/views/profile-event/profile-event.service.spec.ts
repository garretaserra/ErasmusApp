import { TestBed } from '@angular/core/testing';

import { ProfileEventService } from './profile-event.service';

describe('ProfileEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileEventService = TestBed.get(ProfileEventService);
    expect(service).toBeTruthy();
  });
});
