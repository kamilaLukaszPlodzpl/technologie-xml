import { Pipe, PipeTransform } from '@angular/core';
import { GameApiService } from '../services/game-api.service';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  constructor(private gameApi: GameApiService){}
  transform(id: string): string {
    return this.gameApi.getGenreList().get(id);
  }

}
