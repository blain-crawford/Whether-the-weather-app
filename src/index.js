import 'regenerator-runtime/runtime';
import './styles.css';
import { key } from './key.js';

const cityInput = document.querySelector('#city-input');
const searchButton = document.querySelector('#search-button');
const cityDisplay = document.querySelector('#city');
const searchError = document.querySelector('#search-error')

const clearCityInput = () => {
  cityInput.value = '';
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
    cityDisplay.innerText = cityInformation[0].name;
  } catch (error) {
    searchError.innerText = 'Location not found**'
  }

};

const searchZipCode = async (zipcode) => {
  const zipcodeResponse = await fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode}&appid=${key}`,
    {
      mode: 'cors',
    },
  );

  const zipcodeInformation = await zipcodeResponse.json();
  cityDisplay.innerText = zipcodeInformation.name;
};

const searchCityByNameOrZipcode = async (e) => {
  const cityBeingSearched = cityInput.value;
  try {
    if (cityInput.value === '') {
      searchError.innerText = 'Please enter a city of zipcode*'
      return;
    }
    if (zipOrCityName(cityBeingSearched)) {
      searchZipCode(cityBeingSearched);
    } else {
      searchName(cityBeingSearched);
    }
  } catch (error) {
    searchError.innerText = 'Location not found**'
    
  }
  clearCityInput();
  searchError.innerText = '';
};

searchButton.addEventListener('click', searchCityByNameOrZipcode, false);
cityInput.addEventListener('keyup', function(e) {
  if(e.keyCode === 13) {
    console.log(e)
    searchCityByNameOrZipcode()
    e.preventDefault()
  }
}, false)
