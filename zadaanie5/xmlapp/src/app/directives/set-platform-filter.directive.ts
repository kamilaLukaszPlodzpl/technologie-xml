import { Directive, Input, HostListener, getPlatform, ElementRef } from '@angular/core';
import { GameApiService } from '../services/game-api.service';

@Directive({
  selector: '[appSetPlatformFilter]'
})
export class SetPlatformFilterDirective {

  constructor(private gameApi: GameApiService, private el: ElementRef) {
    this.gameApi.getGameListUpdate().subscribe(o=>{
      if(this.getPlatformFilterList().join(',') == this.gameApi.getFilter().platforms.join(','))
      {
          //#CC3521
          this.el.nativeElement.style.color = "#CC3521";

      }
      else
      {
        this.el.nativeElement.style.color = "inherit";
      }
    });
  }
  private getPlatformFilterList():Array<string>
  {
    let platforms: Array<string>;
    if(this.value=="")
      platforms = new Array<string>();
    else
      platforms = this.value.split(",");
    return platforms;
  }
  @Input('appSetPlatformFilter') value:string;
  @HostListener('click') public onClick(): void
  {
    let newFilter = this.gameApi.getFilter();
    newFilter.platforms = this.getPlatformFilterList();
    this.gameApi.setFilter(newFilter);
  }

}
