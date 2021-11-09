import './css/styles.css';

const DEBOUNCE_DELAY = 300;
// const country = fetch(`https://restcountries.com/v3.1/name/${name}`);


const country = fetch(`https://restcountries.com/v3.1/name/China`).then(data => {console.log(data);});
