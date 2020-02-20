import { TestBed } from '@angular/core/testing';

import { GenBooksService } from './gen-books.service';

describe('GenBooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenBooksService = TestBed.get(GenBooksService);
    expect(service).toBeTruthy();
  });
});
