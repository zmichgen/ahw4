import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  data: any[];
  searchString: string = 'cat';
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getData(this.searchString);
    console.log(this.data);

  }

  getData(searchString?: string): void {
    this.apiService.api(searchString).subscribe(arg => {
      this.data = arg.items;
      console.log(this.data);
    });
  }

}
