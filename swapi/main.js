// const axios = require('axios');

// const { default: axios } = require("axios");

const button = document.querySelector("button");
const body = document.querySelector("body")

// const buttonClicked = () => {
//     console.log('button clicked')
// };

// const buttonClicked = () => {
//     axios
//         .get('https://swapi.dev/api/planets/2')
//         .then((res) => {
//             let residents = res.data.residents;
//             console.log(residents)
//             for (let i = 0; i < residents.length; i++) {
//             console.log(residents[i]);
//             const names = document.createElement('div');
//             body.appendChild(names);
//     axios
//         .get(residents[i])
//         .then((res) => {
//             console.log(`${res.data.name}`)
//             names.innerHTML = `<h2> ${res.data.name} </h2>`
//         })
//     }
//     })
// };

const buttonClicked = () => {
    axios
        .get('https://swapi.dev/api/planets/2')
        .then((res) => {
            let residents = res.data.residents;
            for (let i in residents){ 
            const names = document.createElement('div');
            body.appendChild(names);
    axios
        .get(residents[i])
        .then((res) => {
            names.innerHTML = `<h2> ${res.data.name} </h2>`
        });
        };
    });
};

button.addEventListener('click', buttonClicked);