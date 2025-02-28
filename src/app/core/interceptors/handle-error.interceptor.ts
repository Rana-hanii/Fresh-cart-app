import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const handleErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const _toastrService = inject(ToastrService);
  console.log('Request is on its way');
  
  return next(req).pipe(
    catchError((error) => {
      console.log('Error is here');
      console.log(error);
      if (error.status === 0) {
        _toastrService.error('No network connection ');

      }
      return throwError(() => error);
    })
  );
};
