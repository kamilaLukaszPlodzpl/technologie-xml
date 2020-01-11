import { Pipe, PipeTransform } from '@angular/core';
import { GameApiService } from '../services/game-api.service';

@Pipe({
  name: 'platforms'
})
export class PlatformsPipe implements PipeTransform {

  constructor(private gameApi: GameApiService){}
  transform(ids:Array<string>): string {
    let out:string = " ";
    for(let id of ids)
    {
      out += this.gameApi.getPlatformList().get(id) + ", ";
    }
    return out;
  }

}
