import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Subject, Subscription, of } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  search: string = null;
  data: any[];

  constructor(private apiService: ApiService) {
    this.getData(this.apiService.search);
  }

  ngOnInit() {
    this.apiService.change.subscribe((str: string) => {
      this.search = str;
      this.getData(this.search);
    });
  }

  getData(search?: string): void {
    this.apiService.api(search).subscribe(arg => {
      this.data = arg.items;
    });
  }

}
