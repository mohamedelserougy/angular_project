import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const isAuthenticatedGuard: CanActivateFn = () => {
    const authService = inject(Auth);
    const router = inject(Router)


  if(!authService.islooged()){
    return true ;
  }else{
    router.navigate(['/products'])
    return false
  }




};
