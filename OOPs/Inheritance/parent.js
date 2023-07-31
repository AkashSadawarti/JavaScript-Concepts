"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Headphones = void 0;
var Headphones = /** @class */ (function () {
    function Headphones(company, type, price) {
        this.company = company;
        this.price = price;
        this.type = type;
    }
    Headphones.prototype.headphones = function () {
        return "Company : ".concat(this.company, ",  Price : ").concat(this.price, ",  Type : ").concat(this.type);
    };
    return Headphones;
}());
exports.Headphones = Headphones;
var obj = new Headphones('JBL', '1330/-', 'Wireless');
console.log("------------Parent-----------");
console.log(obj);
console.log("Company : ", obj.company);
console.log("Price : ", obj.price);
console.log("Type : ", obj.type);
