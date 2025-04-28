import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { secretaryGuard } from './secretary.guard';

describe('secretaryGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => secretaryGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
