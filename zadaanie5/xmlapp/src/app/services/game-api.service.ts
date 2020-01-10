import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { xml2js } from 'xml2js';
import * as xml2js from 'xml2js';
import { Game } from '../model/Game';
import { Date } from '../model/Date';
import { Rating } from '../model/Rating';
import { Pegi } from '../model/Pegi';


@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  constructor(private httpClient:HttpClient) {
    this.loadXML();
  }
  private gameList: Array<Game>;
  private loadXML(): void
  {
    this.gameList = [];
    this.httpClient.get("/assets/video_games.xml",{responseType: 'text'}).subscribe(
      (data)=>{
        this.parseXML(data);
        
      }
      );
  }

  private parseXML(data){
    let parser = new xml2js.Parser();
    parser.parseString(data,(err,result)=>{
      let data = result.root.data[0];
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
    });
  }

}
