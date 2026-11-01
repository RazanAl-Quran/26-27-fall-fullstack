// // Async/Await

// console.log('before fetch');

// fetch('https://digimon-ai.vercel.app/api/digimon')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Failed to fetch Digimon data');
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Extract only the names into a new array
//         const names = data.map(digimon => digimon.name);
//         return names;
//     })
//     .then(namesArray => {
//         console.log('Digimon Names:', namesArray);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });


// console.log('after fetch');
// console.log('after fetch');



console.log('before fetch');


async function fetchDigimonNames() {

    try {

        let response = await fetch('https://digimon-api.vercel.app/api/digimon')
        let allDig = await response.json();
        let names = allDig.map(digimon => digimon.name);
        console.log(names);
    } catch (error) {
        console.log(error);
        
    }
    
    
}
fetchDigimonNames();
 

console.log('after fetch');
console.log('after fetch');