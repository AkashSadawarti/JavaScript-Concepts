// Square pattern
// let row = 5
// let string = ''
// for(let i=0;i<row;i++){
//   for(let j=0;j<row;j++){
//     string += '*'
//   }
//   string += "\n"
// }
// console.log(string);

// //90deg downward reverse triangle
// let row2 = 5
// let string2 = ""
// for(let i=0;i<row2;i++){
//     for(let j=i;j<row2;j++){
//       string2 += ' * '
//     }
//     string2 += "\n"
//   }
//   console.log(string2);

// //90deg triangle
// let row3 = 6
// let string3 = ""
// for(let i=row3;i>0;i--){
//     for(let j=row3;j>i;j--){
//       string3 += ' # '
//     }
//     string3 += "\n"
//   }
//   console.log(string3);

//   // triangle right
//   let row4 = 5
//   let string4 = ""
//   for(let i=1; i<=row4; i++){
//       for(let j=0 ;j<row4-i; j++){
//         string4 += " "
//       }
//       for(let k=0; k<i;k++){
//          string4 += "*"
//       }
//       string4 += "\n"
//     }
//     console.log(string4);

//     let row5 = 5
//     let string5 = ""
//     for(let i=1; i<=row4; i++){
//         for(let j=1 ;j<=row4-i; j++){
//           string5 += " ";
//         }
//         for(let k=0; k<2*i-1;k++){
//            string5 += "*";
//         }
//         string5 += "\n"
//       }
//   console.log(string5);

let row6 = 6
let string6 = ""
for(let i=0; i<=row6; i++){
    for(let j=1 ;j<=i; j++){
      string6 += " ";
    }
    for(let k=0; k<2*(row6-i);k++){
       string6 += "*";
    }
    string6 += "\n"
  }
  console.log(string6);


// let row7 = 4;
// let string7 = "";

//     for (let i = 0; i < row7; i++) {
//         for (let j = 0; j <= 1; j++) {
//             string7 += " ";
//         }
//         for (let k = 0; k <= 2*(row7-i)-1 ; k++) {
//             string7 += "*";
//         }
//         string7 += "\n";
//     }
//     for(let i=1;i<row7;i++){
//         for(let j=i;j<row7;j++){
//             string7 += " ";
//         }
//         for(let k=0;k<=2*(row7-i); k++){
//             string7 += "*"
//         }
//         string7 += "\n"
//     };

// console.log(string7);

// 'use strict'
// let arr  = [1]