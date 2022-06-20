// var keyword (gets added to the global Object as a property)
//---------------------------------------------------------------
// -> undefined hence no temporal dead zone
// console.log('value of i before its declaration', i) 
// var i = 10
// var i = 11
// var i; // undefined value assigned by JS Engine

//let keyword (Doesn't gets added to the global Object as a property)
//----------------------------------------------------------------------
//-> Cannot access 'i' before initialization, hence has a temporal dead zone
// console.log('value of i before its declaration', i)
// let i// undefined
// let i = 88
// let i = 99 // Cannot redeclare block scoped variable
// i = 99

//const keyword
//---------------
// -> Cannot access 'i' before initialization, hence has a temporal dead zone 
// console.log('value of i before its declaration', i)
const i = 20
// i = 21 // Error: Assignments to constant variable is not possible

function myFunction() {
    console.log('value of i inside function', i)
}

myFunction()
console.log('value of i outside function', i)