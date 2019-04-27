import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  search = '';
  data = null;
  change: EventEmitter<string> = new EventEmitter();
  constructor(private http: HttpClient) { }

  api(search?: string): Observable<any> {
    const whatSearch = search || '';
    return this.http.get<any>(`&type=video&part=snippet&maxResults=50&q=${whatSearch}`);
  }

  doChange(str: string) {
    this.search = str;
    this.change.emit(this.search);

  }

  itemInfo(id: string) {
    return this.http.get<any>(`&part=statistics&id=${id}`);
  }
}
