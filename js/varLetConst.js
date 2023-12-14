// // const -- unchangeable
// // let -- changeable

// //scope

// //var is function scoped -- the context in which the variable will work (or is defined)

// var x = "value"

// if (true){
//     var x = "new value"
// }

// function myFunction(){
//     var x = "even newer value"
// }

// // console.log(x)

// //let and const are BLOCK scoped {}
// let ourLet = "original"

// {
//     let ourLet = "block scoped version"
// }

// // let ourLet = "new value"

// console.log(ourLet)
//hoisting vars are hoisted and initialized, let and const are being hoisted 

// console.log(x)
// var x = "test value"

// console.log(x)
// let x = "value"

// const myVal = 8;
// myVal = 9;
const myArr = []
myArr.push('value')
console.log(myArr)

const obj = {'key':'value'}
obj.key = "new value"
// var x = undefined;
// console.log(x)
// x = 'test value'

//redeclaration -- vars can be redeclared -- const and let cannot


