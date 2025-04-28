import { CanActivateChildFn } from '@angular/router';

export const teacherGuard: CanActivateChildFn = (childRoute, state) => {
  const typeUser = sessionStorage.getItem('typeUser');
  if (typeUser !== 'teacher') {
    return false;
  }
  return true;
};
