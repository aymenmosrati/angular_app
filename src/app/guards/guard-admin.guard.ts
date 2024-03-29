import { CanActivateFn, Router } from '@angular/router';
import { ShareServicesService } from '../services/share-services.service';
import { inject } from '@angular/core';

export const guardAdminGuard: CanActivateFn = (route, state) => {
  const share = inject(ShareServicesService);
  const router = inject(Router);
  return new Promise((resolve, reject) => {
    if (share.isAdmin) {
      resolve(true);
    } else {
      router.navigate(['/']);
      resolve(false);
    }
  });
};
