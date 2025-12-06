import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
     if(req.url.indexOf("Service") > 0)  return next(req);

     const token = localStorage.getItem("TOKEN");
     const clonRequest = req.clone({
          setHeaders:{
               Authorization: `Bearer ${token}`
          }
     })
     return next(clonRequest);
    
};
