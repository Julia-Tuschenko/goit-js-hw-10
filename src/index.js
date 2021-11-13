import './css/styles.css';
import {fetchCountry} from './js/fetchCountries.js'
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import countryLayoutIpi from './templates/country_info.hbs'
// console.log(fetchCountry);

const DEBOUNCE_DELAY = 300;


const input = document.querySelector('#search-box') ;
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(onSearchNameCountry, DEBOUNCE_DELAY));

function onSearchNameCountry(elements){
    elements.preventDefault();
    const trimInput = elements.target.value.trim();
    reviewTextInput(trimInput);
    fetchCountry(trimInput).then(checkCountrylength);
}
// console.log(onSearchNameCountry);


function checkCountrylength (country){
    cleanerCountryText();

    if (country.length > 10){
        manyMatchesFound();
        return;
     }  if  (country.length >= 2 && country.length < 10) {
        showCountry(country);
        return;
    } 
    fillingInfo(country);  
}


function showCountry (resolte){
    // name.official - полное имя страны
    // capital - столица
    // population - население
    // flags.svg - ссылка на изображение флага
    // languages - массив языков
    const markup = resolte.map(
    ({name, flags}) => {`<li class='country-list'>
    <img scr="${flags.svg}"  alt="flag" class='country-flag'/>
    <h1 class='country-many-name'>${name.official}</h1>
    </li>`;
    })
    .join('');
    countryList.innerHTML = markup; 
}

function manyMatchesFound(){
    Notify.info(`Too many matches found. Please enter a more specific name`);
}
function fillingInfo(countryName){
    countryInfo.innerHTML = countryLayoutIpi(countryName);
}

function cleanerCountryText(){
    countryList.innerHTML = "";
    countryInfo.innerHTML = "";
}

function reviewTextInput(elem){
    if(!elem){
       cleanerCountryText();
       return 
    };
}

// function checkCountrylength (country){
//     cleanerCountryText();
//     return (showCountry(country) ? country.length >= 2 && country.length < 10 : manyMatchesFound());
// }


// function searchCountryList(element){
//     countryList.innerHTML = `<li>
//     <img scr="${element.flags}"  alt="flag" width="60" height="60" />
//     <h1>${element.name}</h1>
//     </li>
//     `;
// }











// https://restcountries.com/v2/${name}?fields=name,capital,population,flags,languages 

























// const country = fetch(`https://restcountries.com/v3.1/name/${name}`);

// const input = document.querySelector('#search-box') ;
// const countryList = document.querySelector('.country-list');
// const countryInfo = document.querySelector('.country-info');


// input.addEventListener('input', e => {
//     e.preventDefault();
//     // console.log(input.value);
//     const name = input.value;

//     fetchCountry(name)
//     .then(searchCountryList)
//     .catch(error => console.log(error));
//     console.log(searchCountryList);
// });

// function searchCountryList(element){
//     countryList.innerHTML = `<li>
//     <img scr="${element.flags.svg}"  alt="flag" width="60" height="60" />
//     <h1>${element.name.official}</h1>
//     </li>
//     `;
// }




// function completeInfoCountry({name, capital, population, flags, languages}){
//     const info = ` <div>
//     <img scr="${flags.svg}"  alt="flag" width="80" height="80" />
//     <p>${name.official}</p>
//     </div>
    
//     <ul>
//     <li>Capital:<span>${capital}</span></li>
//     <li>Population:<span>${population}</span></li>
//     <li>Languages:<span>${languages}</span></li>
//     </ul>
//     `;

//     // console.log(info);
// }

// Тебе нужны только следующие свойства:

// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков




















// fetch(`https://restcountries.com/v3.1/name/{name}`)
// .then(r => {r.json()})
// .then(userName => {console.log(userName);})
// .catch(error => console.log(error))

























// const refs = {
//     input: document.querySelector('#search-box'),
//     countryList: document.querySelector('.country-list'),
//     countryInfo: document.querySelector('.country-info'),
// };

// console.log(refs.input);

// refs.input.addEventListener('input', (e) => {
//     e.preventDefault();
//     const name = e.elements.value;

//     fetchCountries(name)
//     .then((country) => {
//         console.log(country);
//     })
// });


// function fetchCountries(name){
//     return  fetch(`https://restcountries.com/v3.1/name/${name}`)
//     .then(response => {
//         response.json();
//     });
// }






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
