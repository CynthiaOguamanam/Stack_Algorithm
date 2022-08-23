// let n =[];
// let x = "peter";
// let w =""

// for(let i=0; i<n.length; i++){
// x.push(n[i]);
// }

// console.log('new stack value', x);

// for (let i=0; i<n.length; i++){
//    w +=  x.pop();
// }
// console.log("new stack value", x)
// console.log()
// console.log("new stack value", w)

// // // compare and return whether its a palindrome or not

// let n =[];
// let x = "level";
// let w =""

// for(let i=0; i<n.length; i++){
// x.push(n[i]);
// }

// console.log('new stack value', x);

// for (let i=0; i<n.length; i++){
//    w +=  x.pop();
// }
// console.log("new stack value", x)
// console.log()
// console.log("new stack value", w)

// if (n===w){
//     console.log("new storage is a palindrome")
// }else{
//     console.log("its not a palindrome")
// }


// make it reuseable

const  newUse = (n)=>{

let x = [];
let w =""

for(let i=0; i<n.length; i++){
x.push(n[i]);
}

console.log('new stack value', x);

for (let i=0; i<n.length; i++){
   w +=  x.pop();
}
console.log("new stack value", x)
console.log()
console.log("new stack value", w)

if (n===w){
    console.log("new storage is a palindrome")
}else{
    console.log("its not a palindrome")
}

}
newUse("Cynthia") 