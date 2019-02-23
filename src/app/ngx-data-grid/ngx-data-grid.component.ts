import { Component, OnInit, Input } from '@angular/core';
import { Subject, from } from 'rxjs';
import { distinctUntilChanged, debounceTime, } from 'rxjs/operators';


@Component({
  selector: 'app-ngx-data-grid',
  templateUrl: './ngx-data-grid.component.html',
  styleUrls: ['./ngx-data-grid.component.css']
})
export class NgxDataGridComponent implements OnInit {
  prop = undefined;
  sortOrder = 'asc';
  page = 1;
  paginationLimit = 20;
  searchText;
  @Input('rowData') rowData;
  @Input('colDefs') colDefs;
  @Input('pagination') pagination;
  @Input('searchKey') searchKey;
  @Input('searchPlaceHolder') searchPlaceHolder;
  @Input('navigationUrl') navigationUrl;
  @Input('navigationKey') navigationKey;
  constructor() { }

  ngOnInit() {
  }

  sortData = (prop: string) => {
    this.prop = prop;
    this.sortOrder = this.sortOrder == 'asc' ? 'desc' : 'asc';
  }

  getSortClass = (prop) => {
    return {
      'glyphicon-sort': this.prop !== prop,
      'glyphicon-sort-by-attributes': this.prop === prop && this.sortOrder === 'asc',
      'glyphicon-sort-by-attributes-alt': this.prop === prop && this.sortOrder === 'desc'
    };
  }
}