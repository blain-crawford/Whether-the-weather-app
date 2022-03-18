import 'regenerator-runtime/runtime';
import './styles.css';
import { key } from './key.js';

const cityInput = document.querySelector('#city-input');
const searchButton = document.querySelector('#search-button');
const cityDisplay = document.querySelector('#city');
const searchError = document.querySelector('#search-error');

const clearCityInput = () => {
  cityInput.value = '';
};

const throwSearchError = () => {
  if (cityInput.value === '') {
    searchError.innerText = 'Please enter city or zipcode**';
  } else {
    searchError.innerText = 'Location not found**';
  }
};

const zipOrCityName = (searchInput) => {
  return /\d/.test(searchInput);
};

const searchName = async (city) => {
  try {
      const cityResponse = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`,
        {
          mode: 'cors',
        },
      );
    
    const cityInformation = await cityResponse.json();
    
    if (cityInformation[0].name) {
      cityDisplay.innerText = cityInformation[0].name;
    }

    return [cityInformation[0].lat, cityInformation[0].lon];
  } catch (error) {
    throwSearchError();
  }
};

const searchZipCode = async (zipcode) => {
  try {
    
      const zipcodeResponse = await fetch(
        `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode}&appid=${key}`,
        {
          mode: 'cors',
        },
      );
    
    const zipcodeInformation = await zipcodeResponse.json();
    if(zipcodeInformation.name) {
      cityDisplay.innerText = zipcodeInformation.name;
    }
    return [zipcodeInformation.lat, zipcodeInformation.lon];
  } catch (error) {
    throwSearchError();
  }
};

// const searchCityByNameOrZipcode = async (e) => {
//   const cityBeingSearched = cityInput.value;
//   try {
//     if (cityInput.value === '') {
//       searchError.innerText = 'Please enter a city of zipcode*'
//       return;
//     }
//     if (zipOrCityName(cityBeingSearched)) {
//       searchZipCode(cityBeingSearched);
//     } else {
//       searchName(cityBeingSearched);
//     }
//   } catch (error) {
//     searchError.innerText = 'Location not found**'

//   }
//   clearCityInput();
//   searchError.innerText = '';
// };

const searchAreaWeather = (latitude, longitude) => {
  console.log(latitude, longitude);
}

const searchCityByNameOrZipcode = () => {
  return new Promise((resolve, reject) => {
    const cityBeingSearched = cityInput.value;
    if (cityBeingSearched === '') {
      // reject();
    }
    if (zipOrCityName(cityBeingSearched)) {
      resolve(searchZipCode(cityBeingSearched));
    } else {
      resolve(searchName(cityBeingSearched));
    }
  })
    .then((response) => {
      if(response) {
        searchAreaWeather(response[0], response[1]);
      }
      clearCityInput();
    })
    .catch((error) => {
      throwSearchError();
    });
};

searchButton.addEventListener('click', searchCityByNameOrZipcode, false);
cityInput.addEventListener(
  'keyup',
  function (e) {
    if (e.keyCode === 13) {
      searchCityByNameOrZipcode();
    }
  },
  false,
);
