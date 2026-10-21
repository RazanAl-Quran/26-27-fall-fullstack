// let people = ['Razan', 'Sherry', 'Abdulrahman', 'Aisha'];

// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);

// }


// foreach
// people.forEach(function(){
// })


// Array.forEach is a method on an array that processes every element in the array with a callback
// The callback is always given the current element's value and index in the array as args
//forEach runs a CALLBACK function WITH every element of the array


// let people = ['Razan','Sherry','Abdulrahman','Aisha'];

console.log('-----------------------');

people.forEach((person, idx) => {
    console.log(person);

})


people.forEach(function (person, idx) {
    console.log(person);
})



function handlepeople(person, idx) {
    console.log(person);
}

// const handlepeople =  (person, idx)=>{
//     console.log(person);
// }

people.forEach(handlepeople);




// map
// array.map( fn(v,i) {} ) Much like array.forEach()
// The array.map() function iterates over an array and runs a call back for each element. 
// The callback receives the value and the index of the array element as a parameter.
// The difference is that `.map()` will always return you a **new array** of the **same length** as the original array comprised of your return values

let numbers = [2, 3, 4, 5];

let squares = numbers.map((num, idx) => {
    if (num < 4) {
        return num * num;
    } 
    else {
        return num;
    }
})

// console.log("numbers" + numbers)
console.log({ numbers });
console.log({ squares }); //[4,9,16,25]



let people2 = [
  { name: "Atallah", role: "Dad" },
  { name: "Messina", role: "Mom" },
  { name: "Razan", role: "Kid" },
  { name: "Zaid", role: "Kid" },
];

let names= people2.map((n)=>{
    return n.name;
})

let names2= people2.map(n=> n.name)

console.log(names);



// filter
// Filter
// .filter() similar to .map() -> iterate over an array and runs a callback for each element
// it will return a new array and it could be the same length of the original one or not
// the elements will be from the original array that match your criteria(your filter condition) 

let numbers2= [1,2,6,7,8];
let evens = numbers2.filter((n)=>{
    if(n%2==0){
        return 1;
        // return true;
        // return n;
        // return truthy-value;
    }
})
console.log({numbers2});
console.log({evens});


if(5==='5') {
    console.log( 'equal');
} else {
    console.log( 'not equal');
}


// if(5!='5') // ==
// if(5!=='5') // ===

let family = [
  { name: 'jack', role: 'dad' },
  { name: 'alice', role: 'mum' },
  { name: 'rose', role: 'daughter' },
  { name: 'hailey', role: 'daughter' }
];

let daughters = family.filter(person=>{
  if(person.role==='daughter') {
    return person;
  }
});
console.log(daughters);

