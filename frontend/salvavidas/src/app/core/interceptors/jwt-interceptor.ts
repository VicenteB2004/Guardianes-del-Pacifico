import { HttpInterceptorFn } from '@angular/common/http';

/**
 * JWT Interceptor - Adds authorization token to all HTTP requests
 */
export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  // Get token from localStorage
  const token = localStorage.getItem('accessToken');

  // Clone request and add authorization header if token exists
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req);
};
