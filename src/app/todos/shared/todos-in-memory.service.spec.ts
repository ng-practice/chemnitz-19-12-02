import { TestBed } from '@angular/core/testing';

import { TodosInMemoryService } from './todos-in-memory.service';

describe('TodosInMemoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodosInMemoryService = TestBed.get(TodosInMemoryService);
    expect(service).toBeTruthy();
  });
});
