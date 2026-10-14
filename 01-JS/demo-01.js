// Resources
// https://www.w3schools.com/js/js_es6.asp
// https://www.w3schools.com/js/js_let.asp
// https://www.w3schools.com/js/js_const.asp
// https://www.w3schools.com/js/js_datatypes.asp
// https://www.w3schools.com/js/js_typeof.asp
// https://www.geeksforgeeks.org/primitive-and-non-primitive-data-types-in-javascript/
// https://www.w3schools.com/js/js_hoisting.asp
// https://www.w3schools.com/js/js_destructuring.asp
// https://www.w3schools.com/react/react_es6_spread.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_rest
// https://www.w3schools.com/js/js_best_practices.asp


console.log("ALIVE!!!!!!");

const x2 = 20;
console.log(x2);
// x2=9;

{
    var x = 5;
}

console.log(x);

var x = 99;
console.log(x);


{
    let x1 = 10;
    console.log(x1);
}

let space = 90;
space = 100;
console.log(typeof(space));
space = "hello";
console.log(typeof(space));

x7 = 7;
// code
// code
// code
// code
// code
// code
var x7;
console.log(x7);

// hoisting

function sum (x,y) {
    return x+y;
}
console.log(sum(3,6));


console.log(tt);
tt = 99;
var tt;


// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

let personFirstName = person.firstName;
let personLastName = person.lastName;
let personAge = person.age;
console.log(personFirstName);
console.log(personLastName);
console.log(personAge);


// Destructuring
let {firstName, lastName, age} = person;
console.log(firstName + lastName);

// console.log 7 + 9) ;


let n1 = 99;
let n2 = n1;
n1=77;
console.log({n1});
console.log({n2});



let obj1 = { username: "Alice", age: 25 };
let obj2 = obj1;
obj2.age = 99;
obj1.age=88;
console.log(obj1);
console.log(obj2);


// Uses of Spread Operator
// 1. Copying Arrays & Objects (Avoiding Mutations)
const obj3 = { name: "Alice", age: 25 };
const obj4 = { ...obj3 }; // Creates a new object
obj4.age = 30;
console.log(obj3); // { name: "Alice", age: 25 }
console.log(obj4);


// 2. Merging Arrays & Objects
const arr11 = [1, 2, 3];
const arr22 = [4, 5, 6];

const mergedArr = [...arr11, ...arr22];
console.log(mergedArr); // [1, 2, 3, 4, 5, 6]

const user = { name: "John", age: 30 };
const details = { country: "USA", gender: "Male" };

const mergedUser = { ...user, ...details };
console.log(mergedUser); // { name: "John", age: 30, country: "USA", gender: "Male" }


// 3. Adding Elements to Arrays Easily
// Instead of using .concat(), we can use the spread operator.
const arr = [1, 2, 3];
const newArr = [0, ...arr, 4];
console.log(newArr); // [0, 1, 2, 3, 4]


// 4. Converting Strings to Arrays
const str = "Hello";
const charArray = [...str];
console.log(charArray); // ['H', 'e', 'l', 'l', 'o']


