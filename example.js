// // global scope

// var x = 10;

// function foo() {
//  // foo scope
//  // [[Environment]] = global scope

//  var y = 20;
// }

// function bar() {
//  // bar scope
//  // [[Environment]] = global scope
//      some()
     
//  var z = 30;
// }

// function some() {
//     console.log("some");
// }

// console.log("je;lo");


// const sum = (num) => {
//     return (b) => {
//         return (c) => {
//             return num + b + c
//         }
//     }
// }

// console.log(sum(6)(3)(3));




// const  makeCounter = () =>{
//     let i = 0
//     return () => {
//         return i = i + 1
//     }
// }
// const counter = makeCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// const counter2 = makeCounter();
// console.log(counter2()); // 1
// console.log(counter()); // 3


// const  makeCounter = (startNumber) =>{
//     let i = 0
//     return () => {
//         return i = i + 1
//     }
// }