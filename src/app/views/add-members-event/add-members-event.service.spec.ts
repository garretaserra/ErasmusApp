import { TestBed } from '@angular/core/testing';

import { AddMembersEventService } from './add-members-event.service';

describe('AddMembersEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddMembersEventService = TestBed.get(AddMembersEventService);
    expect(service).toBeTruthy();
  });
});
