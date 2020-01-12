import * as tslib_1 from "tslib";
import { Component, Input, HostListener, ViewChild } from '@angular/core';
let GameComponent = class GameComponent {
    constructor() {
        this.openFull = false;
    }
    onGameClick() {
        this.setDescriptionHeight();
        this.openFull = !this.openFull;
        this.setDescriptionHeight();
    }
    ngOnInit() {
    }
    setDescriptionHeight() {
        if (this.openFull) {
            if ('nativeElement' in this.rootDiv) {
                let h = this.rootDiv.nativeElement.offsetHeight + "px";
                //this.full.nativeElement.style.height = h;
            }
        }
    }
};
tslib_1.__decorate([
    Input()
], GameComponent.prototype, "g", void 0);
tslib_1.__decorate([
    HostListener("click")
], GameComponent.prototype, "onGameClick", null);
tslib_1.__decorate([
    ViewChild('data', { static: false })
], GameComponent.prototype, "rootDiv", void 0);
tslib_1.__decorate([
    ViewChild('descr', { static: false })
], GameComponent.prototype, "full", void 0);
GameComponent = tslib_1.__decorate([
    Component({
        selector: 'app-game',
        templateUrl: './game.component.html',
        styleUrls: ['./game.component.scss']
    })
], GameComponent);
export { GameComponent };
//# sourceMappingURL=game.component.js.map