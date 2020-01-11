import { Component, OnInit, HostListener, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnChanges {


  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
  }

}
