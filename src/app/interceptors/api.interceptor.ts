import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  API_URL: string = 'https://www.googleapis.com/youtube/v3/search?key=';
  API_KEY: string = 'AIzaSyCWu3uDcix-b11amXagJRpbUyQt1BSoVxc';
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({
      url: `${this.API_URL}${this.API_KEY}${req.url}`
    });

    return next.handle(apiReq);
  }
}
