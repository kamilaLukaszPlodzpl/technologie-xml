import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as xml2js from 'xml2js';
import { Game, Date, Pegi, Rating } from '../model/model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  private gameList: Array<Game>;  
  private genreList: Map<string,string>;
  private platformList: Map<string, string>;
  private pegiDescriptorList: Map<string, string>;
  private gameListUpdate: EventEmitter<Array<Game>>;
  
  public getGameList(): Array<Game>
  {
      return this.gameList;
  }
  public getGameListUpdate(): Observable<Array<Game>>
  {
      return this.gameListUpdate;
  }
  
  constructor(private httpClient:HttpClient) {
    this.gameListUpdate = new EventEmitter<Array<Game>>(true);
    this.loadGamesList();
  }
  private loadGamesList(): void
  {
    this.gameList = [];
    this.genreList = new Map<string,string>();
    this.platformList = new Map<string,string>();
    this.pegiDescriptorList = new Map<string,string>();
    this.gameListUpdate.next(this.getGameList());
    this.httpClient.get("/assets/video_games.xml",{responseType: 'text'}).subscribe(
      (data)=>{
        this.parseGamesList(data);
      });
  }
  private parseGamesList(data){
    let parser = new xml2js.Parser();
    parser.parseString(data,(err,result)=>{
      let data = result.root.data[0];
      for(let pegiDescriptor of data.pegiDescriptors[0].pegiDescriptor)
      {
        this.pegiDescriptorList.set(pegiDescriptor.$.id,pegiDescriptor._);
      }
      for(let platform of data.platforms[0].platform)
      {
        this.platformList.set(platform.$.id,platform._);
      }
      for(let genre of data.genres[0].genre)
      {
        this.genreList.set(genre.$.id,genre._);
      }
      let games = data.games[0].game;
      for(let game of games)
      {
        let obj: Game = new Game();
        obj.id = game.$.id;
        obj.title = game.title[0]._;
        obj.language = game.title[0].$.language;
        if('price' in game)
        {
          obj.price = game.price[0]._;
          obj.price_currency = game.price[0].$.currency;
        }
        else
        {
          obj.price = 0;
          obj.price_currency = "";
        }
        obj.relatedGenre_id = game.relatedGenre[0].$.id;
        obj.releaseDate = new Date(
          game.releaseDate[0].day[0],
          game.releaseDate[0].month[0],
          game.releaseDate[0].year[0]
        );
        obj.developer = game.developer[0];
        for(let relatedPlatform of game.relatedPlatforms[0].relatedPlatform)
        {
          obj.relatedPlatforms_id.push(relatedPlatform.$.id);
        }
        obj.publisher = game.publisher[0];
        obj.rating = new Rating(
          game.rating[0].$.source,
          game.rating[0]._,
          game.rating[0].$.max
        );
        let relatedPegi: Array<string> = new Array<string>();
        
        if('relatedPegi' in game.PEGI[0])
          for(let r of game.PEGI[0].relatedPegi)
          {
            relatedPegi.push(r.$.id);
          }
        obj.pegi = new Pegi(game.PEGI[0].$.label,relatedPegi);
        obj.coverArt = game.coverArt[0].$.src;
        this.gameList.push(obj);
      }
      this.gameListUpdate.next(this.getGameList());
    });
  }
}