import { Boat } from "./child1";

export class JBL extends Boat{
    noise_cancellation : string;
    constructor(company:string,price:string,type:string,color:string,noise : string){
        super(company,price,type,color)
        this.noise_cancellation = noise;
    }

    JBLHeadphones(){
        return `Company : ${this.company},price :  ${this.price},type : ${this.type},color : ${this.color},Noise-Cancellation : ${this.noise_cancellation}`;
    }
}

let obj2 = new JBL("JBL","1550/-","Wired","blue","Yes")
console.log("--------Child 2------------");
console.log(obj2.headphones());
console.log(obj2.boatHeadphones());
console.log(obj2.JBLHeadphones());
console.log("COMPANY :",obj2.company);
console.log("PRICE :",obj2.price);
console.log("TYPE :",obj2.type);
console.log("COLOR :", obj2.color);
console.log("NOISE CANCELLATION :",obj2.noise_cancellation);

