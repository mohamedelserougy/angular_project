import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const token = localStorage.getItem("token");
    if (token){
      req = req.clone({
        setHeaders: {
          Authorization : `Bearer ${token}`
        }
      })
    }
     console.log('Outgoing request headers:', req.headers);
    return next(req)
};
