// Basic Operatons Using declaring 
// let a = 10;
// let b = 20;
// console.log('let A = 10 and B = 20 are two Numbers')
// console.log('Addition of two Numbers is ' + (a+b))
// console.log('Substraction of two Numbers is ' + (a-b))
// console.log('Multiplication of two Numbers is ' + (a*b))
// console.log('Division of two Numbers is ' + (a/b))
// console.log('Number A is less than B = ' + (a<b))
// console.log('Number B is greater than A = ' + (b>a))
// console.log('Number A is greater than B = ' + (a>b))
// console.log('Number B is Less than A = ' + (b<a))

//Basic Operations by User Input
// const p = prompt('Enter the First Number')
// const q = prompt('Enter the Second Number')
// let x = parseInt(p)  //Note here we are taking user values in string so we converted in int
// let y = parseInt(q)
// `${}` can be used to enter user value it changes dynamically according to user  
// console.log(`let First Number = ${p} \n   Second Number = ${q} are two Numbers `)
// console.log('Addition of two Numbers is ' + (x+y))
// console.log('Substraction of two Numbers is ' + (x-y))
// console.log('Multiplication of two Numbers is ' + (x*y))
// console.log('Division of two Numbers is ' + (x/y))
// console.log('Number P is less than Q = ' + (x<y))
// console.log('Number Q is greater than P = ' + (x>y))
// console.log('Number P is greater than Q = ' + (x>y))
// console.log('Number Q is Less than P = ' + (x<y))

// && and  || operators

let name = 'Alex'
let age = 18;
// if(name[0] === 'H' && age >= 15){
//     console.log('you are selected')
// }else{
//     console.log('you are not selected');
// }

if(name[0] === 'A' || age >= 20){
    console.log('you are selected')
}else{
    console.log('you are not selected');
}