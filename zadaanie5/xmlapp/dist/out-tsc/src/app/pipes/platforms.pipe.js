import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let PlatformsPipe = class PlatformsPipe {
    constructor(gameApi) {
        this.gameApi = gameApi;
    }
    transform(ids) {
        let out = " ";
        for (let id of ids) {
            out += this.gameApi.getPlatformList().get(id) + ", ";
        }
        return out;
    }
};
PlatformsPipe = tslib_1.__decorate([
    Pipe({
        name: 'platforms'
    })
], PlatformsPipe);
export { PlatformsPipe };
//# sourceMappingURL=platforms.pipe.js.map