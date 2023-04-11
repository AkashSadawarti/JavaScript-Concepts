// sum of Elements in Array exclude duplicates


let uniqueElements = []
for (let i = 0; i < Array.length; i++) {
  if (uniqueElements.indexOf(Array[i]) === -1) {
    uniqueElements.push(Array[i])
  }
}
console.log(uniqueElements);
let sum = 0
for(let i = 0; i<= uniqueElements.length;i++)
{
  sum = uniqueElements.reduce((a,b) => a+b);
}
console.log(sum);
