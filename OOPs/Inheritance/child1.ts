import { Headphones } from "./parent";

export class Boat extends Headphones{
    color : string;
    constructor( company:string,type: string,price: string,color:string){
        super(company,price,type)
        this.color =  color;
    }

    boatHeadphones(){
       return `Company : ${this.company},type : ${this.type},price :  ${this.price},color : ${this.color}`;
    }
}

let ch1 = new Boat('Boat','1200/-','Wireless','candy Red')
console.log("------------Child 1-----------");

console.log(ch1.headphones());
console.log(ch1.boatHeadphones());
console.log(ch1.company);
console.log(ch1.color);
console.log(ch1.price);
console.log(ch1.type);
