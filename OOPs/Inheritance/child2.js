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
exports.JBL = void 0;
var child1_1 = require("./child1");
var JBL = /** @class */ (function (_super) {
    __extends(JBL, _super);
    function JBL(company, price, type, color, noise) {
        var _this = _super.call(this, company, price, type, color) || this;
        _this.noise_cancellation = noise;
        return _this;
    }
    JBL.prototype.JBLHeadphones = function () {
        return "Company : ".concat(this.company, ",price :  ").concat(this.price, ",type : ").concat(this.type, ",color : ").concat(this.color, ",Noise-Cancellation : ").concat(this.noise_cancellation);
    };
    return JBL;
}(child1_1.Boat));
exports.JBL = JBL;
var obj2 = new JBL("JBL", "1550/-", "Wired", "blue", "Yes");
console.log("--------Child 2------------");
console.log(obj2.headphones());
console.log(obj2.boatHeadphones());
console.log(obj2.JBLHeadphones());
console.log("COMPANY :", obj2.company);
console.log("PRICE :", obj2.price);
console.log("TYPE :", obj2.type);
console.log("COLOR :", obj2.color);
console.log("NOISE CANCELLATION :", obj2.noise_cancellation);
