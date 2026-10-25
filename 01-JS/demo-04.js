// Resources
// https://developer.okta.com/blog/2019/01/16/history-and-future-of-async-javascript
// https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/
// http://callbackhell.com/

// What is event loop
// https://www.youtube.com/watch?v=8aGhZQkoFbQ



// callbacks
// A callback is a function passed as an argument to another function and executed later.
// ************ callbacks 1
function calculateSquare(number, callback) {
    console.log('inside calculateSquare');
    let result = number * number;
    callback(result);
}

function displayResult(result) {
    console.log("The square is:", result);
}
// Calling the function with a callback
calculateSquare(5, displayResult);



// callback example 2

function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 done");
        callback();
    }, 2000);
}
function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 done");
        callback();
    }, 3000);
}
function step3() {
    setTimeout(() => {
        console.log("Step 3 done");
    }, 1000);
}
// step1();
// step2();
// step3();

// step2(() => {
//     step1(() => {
//         step3();
//     });
// });

// step1(step2(step3()));




// third party APIs
// A third-party API is an API (Application Programming Interface) that is built and maintained by someone else, usually a company or organization, and you can use it in your own applications to access specific data or services
// 🧠 In Simple Terms:
// It's like borrowing functionality from another website or service instead of building it yourself.

// 🧱 Why Use a Third-Party API?
// 1- Save time and effort
// 2- Get reliable data or services
// 3- Add powerful features without coding them yourself


// ***************** What is fetch:
// It's a built-in promised-based JavaScript function that lets you request data from a server, such as: JSON APIs, Files, and Web pages
// Introduced in ES6, fetch() replaces the older XMLHttpRequest method with a simpler and cleaner syntax.
// The fetch() method returns a Promise, which resolves to a Response object.


// ********Promises********* 
// A Promise is an object that represents a value that may be available now, in the future, or never.

// console.log("line 1");
// console.log("line 2");
// console.log("line 3");
// fetch('https://digimon-api.vercel.app/api/digimon')
//     .then(digimons => {
//         // console.log("line 4");
//         return digimons.json();
//     }).then((digimons2) => {
//         console.log(digimons2);
//     })


// console.log("line 5");
// console.log("line 6");



fetch('https://digimon-ai.vercel.app/api/digimon')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch Digimon data');
        }
        return response.json();
    })
    .then(data => {
        // Extract only the names into a new array
        const names = data.map(digimon => digimon.name);
        return names;
    })
    .then(namesArray => {
        console.log('Digimon Names:', namesArray);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    


// Promises chaining
// we use it when you're chaining asynchronous operations.
// fetch(...)
//   .then(...)  // 1st Promise
//   .then(...)  // 2nd Promise, using result from 1st
//   .then(...)  // 3rd Promise, using result from 2nd
//   .catch(...) // handles errors in any of the above
