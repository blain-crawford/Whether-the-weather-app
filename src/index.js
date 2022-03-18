import 'regenerator-runtime/runtime';
import './styles.css';
import { key } from './key.js';

const cityInput = document.querySelector('#city-input');
const searchButton = document.querySelector('#search-button');
const cityDisplay = document.querySelector('#city');

const clearCityInput = () => {
  cityInput.value = '';
}
const searchCityByNameOrZipcode = async (e) => {
  const cityBeingSearched = cityInput.value;
  try {
    if (cityInput.value === '') {
      alert('Enter city please')
      return;
    }
    if (zipOrCityName(cityBeingSearched)) {
      searchZipCode(cityBeingSearched);
    } else {
      searchName(cityBeingSearched);
    }
  } catch (error) {
    alert("can't Find your city Bub~");
  }
  clearCityInput();
};

const zipOrCityName = (searchInput) => {
  return /\d/.test(searchInput);
};
const searchName = async (city) => {
  const cityResponse = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`,
    {
      mode: 'cors',
    },
  );

  const cityInformation = await cityResponse.json();
  cityDisplay.innerText = cityInformation[0].name;
  
};

const searchZipCode = async (zipcode) => {
  const zipcodeResponse = await fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode}&appid=${key}`,
    {
      mode: 'cors',
    },
  );

  const zipcodeInformation = await zipcodeResponse.json();
  cityDisplay.innerText =zipcodeInformation.name;
};

searchButton.addEventListener('click', searchCityByNameOrZipcode, false);
