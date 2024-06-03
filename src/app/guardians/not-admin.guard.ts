import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const notAdminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (localStorage.getItem('user_role') == 'ADMIN') {
    router.navigate(['/dashboard']);
    return false;
  }
  return true;
};
