import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getData();
    console.log(this.data);
  }

  getData() {
    this.data = this.apiService.getData();
  }
}
