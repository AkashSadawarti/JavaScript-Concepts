// scopes : let and const are BLOCK scope
//        : var is function scope
// for ex
{
    let name = "Learn"
    let lastName = "Javascript"
    // console.log(name + " " + lastName) //o/p printed successfully
}
console.log(name + " " + lastName)  //o/p error because you cannot print o/p outside block 