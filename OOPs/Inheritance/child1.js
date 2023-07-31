"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boat = void 0;
var parent_1 = require("./parent");
var Boat = /** @class */ (function (_super) {
    __extends(Boat, _super);
    function Boat(company, type, price, color) {
        var _this = _super.call(this, company, price, type) || this;
        _this.color = color;
        return _this;
    }
    Boat.prototype.boatHeadphones = function () {
        return "Company : ".concat(this.company, ",type : ").concat(this.type, ",price :  ").concat(this.price, ",color : ").concat(this.color);
    };
    return Boat;
}(parent_1.Headphones));
exports.Boat = Boat;
var ch1 = new Boat('Boat', '1200/-', 'Wireless', 'candy Red');
console.log("------------Child 1-----------");
console.log(ch1.headphones());
console.log(ch1.boatHeadphones());
console.log(ch1.company);
console.log(ch1.color);
console.log(ch1.price);
console.log(ch1.type);
