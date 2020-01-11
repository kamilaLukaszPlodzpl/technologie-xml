import { Component, OnInit } from '@angular/core';
import { GameApiService } from '../../services/game-api.service';
import { Game } from '../../model/model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  public gameList : Array<Game>;
  constructor(private gameApi: GameApiService) {
    this.gameList = this.gameApi.getGameList();
    this.gameApi.getGameListUpdate().subscribe((o)=>{ this.gameList = o; });
  }
  ngOnInit() {}
}
