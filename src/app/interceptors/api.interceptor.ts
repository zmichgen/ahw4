import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from '@angular/core/src/render3/util';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  API_KEY = 'AIzaSyCWu3uDcix-b11amXagJRpbUyQt1BSoVxc';
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let API_URL = '';
    if (req.url.split('&')[1] === 'type=video') {
      API_URL = 'https://www.googleapis.com/youtube/v3/search?key=';
    } else {
      API_URL = 'https://www.googleapis.com/youtube/v3/videos?key=';
    }
    const apiReq = req.clone({
      url: `${API_URL}${this.API_KEY}${req.url}`
    });
    return next.handle(apiReq);
  }
}
