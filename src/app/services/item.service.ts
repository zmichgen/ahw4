import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  stat: any;
  data: any;
  constructor() { }

  getInfo(stat, data) {
    this.data = data;
    this.stat = stat;
  }
}
