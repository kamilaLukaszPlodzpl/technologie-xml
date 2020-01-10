import { Component, OnInit } from '@angular/core';
import { GameApiService } from 'src/app/services/game-api.service';
import { Game } from 'src/app/model/Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  constructor(private gameApi: GameApiService) { }
public gameList : Array<Game>;
  ngOnInit() {
   // this.gameList = this.gameApi.getGameList();
  }
}
