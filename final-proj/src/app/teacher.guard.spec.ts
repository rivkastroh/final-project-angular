import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { teacherGuard } from './teacher.guard';

describe('teacherGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => teacherGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
