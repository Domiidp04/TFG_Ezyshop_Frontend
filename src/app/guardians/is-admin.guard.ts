import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (localStorage.getItem('user_role') != 'ADMIN') {
    router.navigate(['/']);
    return false;
  }
  return true;

};
