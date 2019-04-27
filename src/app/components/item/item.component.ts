import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ItemInfoComponent } from '../item-info/item-info.component';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() data: any;
  @Output() navigateToItem = new EventEmitter();
  itemStat: any;
  constructor(private api: ApiService, private item: ItemService) {

  }

  ngOnInit() {
  }

  getItemStat(id: string): void {
    this.api.itemInfo(id).subscribe(arg => {
      this.itemStat = { ...this.itemStat, ...arg.items[0].statistics };
      this.item.getInfo(this.itemStat, this.data);
      this.navigateToItem.emit();
    });
  }

  onClick($event) {
    this.getItemStat(this.data.id.videoId);
  }


}
