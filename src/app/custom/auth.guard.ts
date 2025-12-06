import { inject } from '@angular/core';
import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AccesoService } from '../services/acceso.service';
import { catchError, map, of } from 'rxjs';
import { routes } from '../app.routes';

export const authGuard: CanActivateFn = (route, state: RouterStateSnapshot) => {
     const token = localStorage.getItem("TOKEN") || "";
     const router = inject(Router);

     const accesoService = inject(AccesoService)
     debugger
     if (token != "") {
          debugger
          return accesoService.validarToken(token).pipe(
               map(data => {
                    if (data.success) {
                         const rolUser = localStorage.getItem("ROL");
                         if (route.routeConfig != null) {
                              let ruta = state.url
                              debugger
                              if (ruta == '/clientes' || ruta == '/entrenadores') {
                                   if (rolUser == "Recepcionista" || rolUser == "Administrador") {
                                        return true;
                                   }
                                   else {
                                        router.navigate(['/'])
                                        return true;
                                   }
                              }
                              if (ruta == '/clientes') {
                                   if (rolUser == "Recepcionista" || rolUser == "Administrador" || rolUser == "Entrenador") {
                                        return true;
                                   }
                                   else {
                                        router.navigate(['/'])
                                        return true;
                                   }
                              }
                              else {
                                   return true;
                              }
                         }
                         return true
                    } else {
                         router.navigate(['/'])
                         return false;
                    }
               }),
               catchError(error => {
                    router.navigate(['/'])
                    return of(false);
               })
          )
     } else {
          const url = router.createUrlTree(["/"])
          return url;
     }

};
