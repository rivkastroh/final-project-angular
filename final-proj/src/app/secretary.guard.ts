import { CanActivateChildFn } from '@angular/router';

export const secretaryGuard: CanActivateChildFn = (childRoute, state) => {
  const typeUser = sessionStorage.getItem('typeUser');
  if (typeUser !== 'secretary') {
    return false;
  }
  return true;
};
