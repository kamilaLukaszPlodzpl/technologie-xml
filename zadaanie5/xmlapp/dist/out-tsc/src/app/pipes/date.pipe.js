import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let DatePipe = class DatePipe {
    transform(date) {
        return date.day + " " + date.month + " " + date.year;
    }
};
DatePipe = tslib_1.__decorate([
    Pipe({
        name: 'date'
    })
], DatePipe);
export { DatePipe };
//# sourceMappingURL=date.pipe.js.map