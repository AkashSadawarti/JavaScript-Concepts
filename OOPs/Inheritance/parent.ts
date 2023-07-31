// Inheritance :1) is-a Relationship,
// 2) data members should be in chronological manner to avoid mismatch of output results,
// 3) constructor should have parent datamembers to get access.
// 4) child class get access by parent extend keyword 

export class Headphones {
    company: string;
    type: string;
    price: string;

    constructor(company: string, type: string, price: string) {
        this.company = company;
        this.price = price;
        this.type = type;
    }

    headphones() {
        return `Company : ${this.company},  Price : ${this.price},  Type : ${this.type}`;
    }
}

let obj = new Headphones('JBL','1330/-','Wireless')
console.log("------------Parent-----------");
console.log(obj);
console.log("Company : ",obj.company);
console.log("Price : ",obj.price);
console.log("Type : ",obj.type);
