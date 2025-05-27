import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const email = sessionStorage.getItem("email");
  const router = inject(Router);
  
  if (!email) {
    alert("Usuário não está autenticado! Redirecionado para pagina de login.");
    return router.parseUrl('/login');
  }

  return true;
};