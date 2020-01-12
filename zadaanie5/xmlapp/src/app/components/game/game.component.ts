import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GameModalViewComponent } from '../game-modal-view/game-modal-view.component';
import { Game } from 'src/app/model/Game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  private openFull: boolean = false;
  constructor(private modalService: NgbModal) {
  }
  @Input () g;
  @HostListener("click") public onGameClick(): void
  {
    
    const modalRef = this.modalService.open(GameModalViewComponent,{
      windowClass: "modalGame"
    });
    ((modalRef.componentInstance) as GameComponent).g = this.g;
    //this.setDescriptionHeight();
    //this.openFull = !this.openFull;
    //this.setDescriptionHeight();
  }
  @ViewChild('data',{static:false}) rootDiv: ElementRef;
  @ViewChild('descr',{static:false}) full: ElementRef;

  ngOnInit() {
  }

  public setDescriptionHeight() : void {
    if(this.openFull)
    {
      if('nativeElement' in this.rootDiv)
      {
        let h =  this.rootDiv.nativeElement.offsetHeight + "px";
        //this.full.nativeElement.style.height = h;
      }
    }
  }
}
