 //Function calling function
//  function greet(){
//     console.log("Hello student");
// }

// function student(){
//     greet();
//     console.log(`Akash`);
// }
// student()

//function in functions eg=>

function movie(){
    let scene = () =>{
        console.log('Aircraft Fighting');
    }

    let soldier = (ladies ,mens ) => {
        console.log(`Total Soldier Strength = ${ladies + mens}`)
    }

    console.log("movie name : Lakshya")
    soldier(5000,1000);   //call this function in function so that it will be accessible soldier() will get printed not scene()
}
movie()

//lexical scope

function myApp(){
    let myVar = "value8";

    function insideFunc(){
        // let myVar = "value67";
        console.log(`inside function : ${myVar}`);
    }
    insideFunc()  //this function will prefer myvar value from its own function but when same variable is defined in same env but not in function it will take myvar value from it parent function i.e env.
}
myApp() //1) o/p = inside function : value67
        //2) comment myvar from local scope o/p = inside function : value8