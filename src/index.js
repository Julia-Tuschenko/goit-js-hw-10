import './css/styles.css';

const DEBOUNCE_DELAY = 300;
// const country = fetch(`https://restcountries.com/v3.1/name/${name}`);


const count = fetch(`https://restcountries.com/v3.1/name/China`)
.then(response => {
    return response.json();
})
.then((country) => {
    console.log(country);
})
.catch((error) => {
    console.log(error);
});
