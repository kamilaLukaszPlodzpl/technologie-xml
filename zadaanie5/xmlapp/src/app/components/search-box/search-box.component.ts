import { Component, OnInit, HostListener, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';
import { GameApiService } from 'src/app/services/game-api.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {


  constructor(private gamepApi:GameApiService) {}
  @ViewChild('inputBoxCtrl',{static:false}) private inputBoxCtrl: NgControl;
  private inputBox:string;
  @HostListener('keyup') onClick():void {
    let filter = this.gamepApi.getFilter();
    filter.other = this.inputBox;
    this.gamepApi.setFilter(filter);
  }
  ngOnInit(): void {
  }
}
