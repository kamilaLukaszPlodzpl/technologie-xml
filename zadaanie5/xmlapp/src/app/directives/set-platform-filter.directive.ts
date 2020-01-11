import { Directive, Input, HostListener } from '@angular/core';
import { GameApiService } from '../services/game-api.service';

@Directive({
  selector: '[appSetPlatformFilter]'
})
export class SetPlatformFilterDirective {

  constructor(private gameApi: GameApiService) { }
  @Input('appSetPlatformFilter') value:string;
  @HostListener('click') public onClick(): void
  {
    let platforms: Array<string>;
    if(this.value=="")
      platforms = new Array<string>();
    else
      platforms = this.value.split(",");
    let newFilter = this.gameApi.getFilter();
    newFilter.platforms = platforms;
    this.gameApi.setFilter(newFilter);
  }

}
