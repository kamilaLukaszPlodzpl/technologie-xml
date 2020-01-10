import { Component, OnInit } from '@angular/core';
import { GameApiService } from 'src/app/services/game-api.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  constructor(private gameApi: GameApiService) { }

  ngOnInit() {
  }

}
