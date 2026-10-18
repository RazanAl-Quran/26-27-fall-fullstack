// All Resources
// HTML DOM
// https://www.w3schools.com/js/js_htmldom.asp
// HTML BOM >> The Browser Object Model (BOM)
// JavaScript Best Practices
// http://w3schools.com/js/js_best_practices.asp
// JS Functions
// https://www.geeksforgeeks.org/different-ways-of-writing-functions-in-javascipt/
// https://www.geeksforgeeks.org/difference-between-function-declaration-and-function-expression-in-javascript/
// JavaScript Arrow Function
// https://www.w3schools.com/js/js_arrow_function.asp


// code 
// code 
// code 
// code 
// code 
// code 
// code 
// code 

// Function declaration 
function add(a, b) {
    console.log(a + b);
}

// Calling a function
add(2, 3);

// x = 10;
// console.log(x);
// var x;



// Function Expression
const add2 = function (a, b) {
    console.log(a + b);
}

// Calling function
add2(2, 8);



// const add3 = (a, b) => {
//     console.log(a + b);
//     console.log(a + b);
//     return a+b;
// }
// add3(4,8);

const add3 = a => a;
add3(4, 8);



// Common Mistake
const getUser = () => { name: "Razan" };
// 👉 JS thinks {} is a block, not an object.

// ✅ Correct way:
const getUser2 = () => ({ name: "Razan" });



const user1 = {
    name: "Alice",
    greet: function () {
        console.log(`Hello, ${this.name}`);
    },
};

user1.greet(); // ✅ Hello, Alice


const user2 = {
    name: "Alice",
    greet: () => {
        console.log(`Hello, ${this.name}`);
    },
};

user2.greet(); //


const user3 = {
    name: "Alice",
    greet: function () {
        const inner = () => {
            console.log(`Hello, ${this.name}`);
        };
        inner();
    },
};

user3.greet(); // ✅ Hello, Alice


// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//     console.log(this); // ✅ Refers to the button element
// });

// button.addEventListener("click", () => {
//     console.log(this); // ❌ Refers to the global `window` object (not the button)
// });



// Template Literals

//1- string interpolation 
let x1 = 4;
let x2 = 6;
// console.log("The sum of " +x1+"and "+"");
console.log(`The sume of ${x1} and ${x2} is ${x1+x2}`);


// 2- Multi-line Strings with Template Literals
let stat1= `szdxfcgvhbwedrf
tgZxcvbsedrftghsdfghsdfghbsdefcgvhbsw
edfrghbjesdrfgh`;
console.log(stat1);


// PS: Escaping Backticks and Dollar Signs
let stat2 = `the backtick \` is sth nice`;
console.log(stat2);


