import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data = null;
  constructor(private http: HttpClient) { }

  api(searchString?: string): Observable<any> {
    const whatSearch = searchString || '';
    return this.http.get<any>(`&type=video&part=snippet&maxResults=50&q=${whatSearch}`);
  }
}
