import './css/styles.css';

const DEBOUNCE_DELAY = 300;
// const country = fetch(`https://restcountries.com/v3.1/name/${name}`);

const refs = {
    input: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
};

console.log(refs.input);

refs.input.addEventListener('input', (e) => {
    e.preventDefault();
    const name = refs.input.value;

    fetchCountries(name)
    .then((country) => {
        console.log(country);
    })
});


function fetchCountries(name){
    return  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {
        response.json();
    });
}






// const count = fetch(`https://restcountries.com/v3.1/name/China`)
// .then(response => {
//     return response.json();
// })
// .then((country) => {
//     console.log(country);
// })
// .catch((error) => {
//     console.log(error);
// });
