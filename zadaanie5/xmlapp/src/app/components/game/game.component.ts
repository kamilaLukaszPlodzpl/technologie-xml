import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  private openFull: boolean = false;
  constructor() {
  }
  @Input () g;
  @HostListener("click") public onGameClick(): void
  {
    this.openFull = !this.openFull;
  }

  ngOnInit() {
  }

}
