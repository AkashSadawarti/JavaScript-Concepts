// scopes : let and const are BLOCK scope
//        : var is function scope (works from block to block and outside block)
// for ex
// BLOCK
{
    let name = "Learn"
    let lastName = "Javascript"
     //using var declaration, var declaration is function scope(work outside block)
     var car = "Ferrari";
     var carSpeed = "300 km/hr";

    // console.log(name + " " + lastName) //o/p printed successfully
}
// console.log(name + " " + lastName)  //o/p error because you cannot print o/p outside block 
console.log(car + " " + carSpeed)  //o/p  because you print o/p outside block by var declaration 