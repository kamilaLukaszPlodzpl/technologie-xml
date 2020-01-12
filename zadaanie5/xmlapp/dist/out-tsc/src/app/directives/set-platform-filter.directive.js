import * as tslib_1 from "tslib";
import { Directive, Input, HostListener } from '@angular/core';
let SetPlatformFilterDirective = class SetPlatformFilterDirective {
    constructor(gameApi) {
        this.gameApi = gameApi;
    }
    onClick() {
        let platforms;
        if (this.value == "")
            platforms = new Array();
        else
            platforms = this.value.split(",");
        let newFilter = this.gameApi.getFilter();
        newFilter.platforms = platforms;
        this.gameApi.setFilter(newFilter);
    }
};
tslib_1.__decorate([
    Input('appSetPlatformFilter')
], SetPlatformFilterDirective.prototype, "value", void 0);
tslib_1.__decorate([
    HostListener('click')
], SetPlatformFilterDirective.prototype, "onClick", null);
SetPlatformFilterDirective = tslib_1.__decorate([
    Directive({
        selector: '[appSetPlatformFilter]'
    })
], SetPlatformFilterDirective);
export { SetPlatformFilterDirective };
//# sourceMappingURL=set-platform-filter.directive.js.map