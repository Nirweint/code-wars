// global scope

var x = 10;

function foo() {
 // foo scope
 // [[Environment]] = global scope

 var y = 20;
}

function bar() {
 // bar scope
 // [[Environment]] = global scope
     some()
     
 var z = 30;
}

function some() {
    console.log("some");
}

console.log("je;lo");