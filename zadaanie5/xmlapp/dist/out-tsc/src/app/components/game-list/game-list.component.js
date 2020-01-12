import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let GameListComponent = class GameListComponent {
    constructor(gameApi) {
        this.gameApi = gameApi;
        this.gameList = this.gameApi.getGameList();
        this.gameApi.getGameListUpdate().subscribe((o) => { this.gameList = o; });
    }
    ngOnInit() { }
};
GameListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-game-list',
        templateUrl: './game-list.component.html',
        styleUrls: ['./game-list.component.scss']
    })
], GameListComponent);
export { GameListComponent };
//# sourceMappingURL=game-list.component.js.map