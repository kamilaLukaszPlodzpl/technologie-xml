import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let GenrePipe = class GenrePipe {
    constructor(gameApi) {
        this.gameApi = gameApi;
    }
    transform(id) {
        return this.gameApi.getGenreList().get(id);
    }
};
GenrePipe = tslib_1.__decorate([
    Pipe({
        name: 'genre'
    })
], GenrePipe);
export { GenrePipe };
//# sourceMappingURL=genre.pipe.js.map