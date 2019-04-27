import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  search: string;
  data = 'data';
  private debounceSubject = new Subject<string>();

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.debounceSubject
      .pipe(
        filter((value) => !value.length || value.length >= 3),
        debounceTime(1000)
      ).subscribe((search) => {
        this.change(search);
      });
  }

  change(search: string): void {
    this.api.doChange(search);
  }

  doChange(search: string): void {
    this.debounceSubject.next(search);

  }

}
