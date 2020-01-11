import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameListComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
