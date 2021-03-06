import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './components/game/game.component';
import { GenrePipe } from './pipes/genre.pipe';
import { PlatformsPipe } from './pipes/platforms.pipe';
import { SetPlatformFilterDirective } from './directives/set-platform-filter.directive';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { DatePipe } from './pipes/date.pipe';
import { GameModalViewComponent } from './components/game-modal-view/game-modal-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameListComponent,
    GameComponent,
    GenrePipe,
    PlatformsPipe,
    SetPlatformFilterDirective,
    SearchBoxComponent,
    DatePipe,
    GameModalViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  entryComponents: [GameModalViewComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
