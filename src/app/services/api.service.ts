import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data = null;
  constructor(private http: HttpClient) { }

  api(): Observable<any> {
    return this.http.get<any>('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCWu3uDcix-b11amXagJRpbUyQt1BSoVxc&type=video&part=snippet&maxResults=50');
  }



}
