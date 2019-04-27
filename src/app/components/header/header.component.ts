import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  search: string;
  data = 'data';
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  change() {
    this.api.doChange(this.search);
  }

}
