import { Notify } from 'notiflix/build/notiflix-notify-aio';

export  function fetchCountry(name){
    const url = `https://restcountries.com/v3.1/name/`
    return fetch(`${url}${name}?fields=name,capital,population,flags,languages `)
    .then(response => {
     if (!response.ok) {
       Notify.failure(`"Oops, there is no country with that name"`);
       throw new Error(response.status);
     }
     return response.json();
   })
   .catch(error => console.log(error));
  }