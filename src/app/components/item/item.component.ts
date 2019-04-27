import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() data: any;
  itemStat: any;
  constructor(private api: ApiService) {

  }

  ngOnInit() {
  }

  getItemStat(id: string): void {
    this.api.itemInfo(id).subscribe(arg => {
      this.itemStat = { ...this.itemStat, ...arg.items[0].statistics };
    });
  }

  onClick() {
    this.getItemStat(this.data.id.videoId);
  }
}
