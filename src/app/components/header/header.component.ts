import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchString: string;
  constructor() { }

  ngOnInit() {
  }

}
