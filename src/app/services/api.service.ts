import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data = { key: 'value' }
  constructor() { }

  getData() {
    return this.data;
  }
}
