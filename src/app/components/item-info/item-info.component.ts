import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnInit {
  data: any;
  stat: any;
  constructor(private router: Router, private item: ItemService) {
    this.stat = this.item.stat;
    this.data = this.item.data;
  }

  ngOnInit() {
  }

  navigateHome() {
    this.router.navigate(['']);
  }
}
