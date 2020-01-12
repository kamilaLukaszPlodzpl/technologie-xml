import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/model/Game';

@Component({
  selector: 'app-game-modal-view',
  templateUrl: './game-modal-view.component.html',
  styleUrls: ['./game-modal-view.component.scss']
})
export class GameModalViewComponent implements OnInit {
  @Input() g: Game;
  constructor() { }

  ngOnInit() {
  }

}
