import * as tslib_1 from "tslib";
import { Component, HostListener, ViewChild } from '@angular/core';
let SearchBoxComponent = class SearchBoxComponent {
    constructor(gamepApi) {
        this.gamepApi = gamepApi;
    }
    onClick() {
        let filter = this.gamepApi.getFilter();
        filter.other = this.inputBox;
        this.gamepApi.setFilter(filter);
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    ViewChild('inputBoxCtrl', { static: false })
], SearchBoxComponent.prototype, "inputBoxCtrl", void 0);
tslib_1.__decorate([
    HostListener('keyup')
], SearchBoxComponent.prototype, "onClick", null);
SearchBoxComponent = tslib_1.__decorate([
    Component({
        selector: 'app-search-box',
        templateUrl: './search-box.component.html',
        styleUrls: ['./search-box.component.scss']
    })
], SearchBoxComponent);
export { SearchBoxComponent };
//# sourceMappingURL=search-box.component.js.map