//JS Review

//variables 

var myVar = "This is a variable"

//data types

//number
var num = 9;
var float = 9.0;

//bools
var bool = true;

//strings
var string = "a collection of characters!"
// strings have length, we can add them together -- concatenation 
// strings are immutable <-- cannot be changed
console.log(string[4])
string[4] = "x" // this will not work
console.log(string)
//arrays
//           0 1 2 3 4 5
var array = [1,2,3,6,8,9]
console.log(array[3])
array[3] = 200;
console.log(array[3])
array.push("here's another one")
console.log(array)
array.pop()
console.log(array)

// null && undefined 
/*
a + b	add two numbers together,
concatenates strings	
12 + 3 // 15
"12" + "3" // "123"copy
a - b	subtracts b from a	
12 - 3 // 9copy
a * b	multiplies a by b	
12 * 3 // 36copy
a / b	divides a by b	
12 / 3 // 4
12 / 5 // 2.4
*/

var x = 9;
//we can use combined operator with the assignment operator
x /= 3;
console.log(x)


// Operator	Explanation
// a == b
// true if a is equal to b
// == vs ===
// == will attempt a type conversion BEFORE comparison, === will compare as is
// a != b	true if a is not equal to b
// a < b	true if a is less than b
// a > b	true if a is greater than b
// a <= b	true if a is less than or equal to b
// a >= b	true if a is greater than or equal to b

// if (condition){
//     //action if condition is true
// } else if (condition2){
//     //action if condition is false but condition2 is true
// } else {
//     //action if none of the conditions were true
// }


// Operator	Explanation
// a && b	true if both a and b are true
// a || b	true if either a or b are true

var a = '1'
var b = 1

console.log(a == b) //converts b into a string, then compares
console.log(a === b) // performs NO conversion, so they are not equal 

//loops?
//allow us to repeat code a set amount of times
for (
    let index = 0; //1. initialization clause -- runs once at the beginning loops
    index < 10; //2. condition checked each iteration 
    index++) { //4. final statement -- runs at the end of every iteration
    console.log(index) //3. body executes if condition remains true
}

// while(true){
//     //body to excute while condition is true
//     // very important in a while loop that the body is trending towards breaking the loop
//     // otherwise we could end up with an infinite loop
//     console.log("ahhhhhhhhhhhh")
//     //ctrl + c is the keyboard interrupt or hit the stop button if you ran it via VS Code
// }


// object

for (let i=0; i<23;i++){
    debugger;
    console.log(i)
}



function myFunction(someParam){
    console.log("the param was " + someParam)
    return 10;
}

console.log(myFunction("Hello"))

//a function call is REPLACED by its RETURN


//objects! Objects are made up of KEY VALUE PAIRS
// keys will be strings
// values can be any data type
// objects like arrays are passed by reference and not value

var obj = {
    "KEY":"VALUE",
    "Age": 90,
    "favFoods": ["pineapple","fish"]
}

var user = "Bob"
var occupation = "Scientist"
var age = 56

var user1 = {
    "name":"Bob",
    "occupation":"scientist",
    "age": 56,
    "sayHi": function(){
        console.log(this.name, "says hi")
    }
}

console.log(user1['name'])

user1.sayHi()

user1.lastName = "Bobberts"

var quotestring = ' " bob said" - Dont use singles for this '

console.log(user1)

var secondUser = {...user1};//spread operator

secondUser.name = "Oops"
console.log(user1, secondUser)
// for objects we can use either dot notation ie user1.name or subscript  ie user1['name']
console.log(typeof(user1.age))
console.log(user1.age * 100)
