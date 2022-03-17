import 'regenerator-runtime/runtime';
import './styles.css';
import { key } from './key.js';

const cityInput = document.querySelector('#city-input');
const searchButton = document.querySelector('#search-button');

const searchLocationWeather = async () => {
  const cityBeingSearched = cityInput.value;
  try{
    if(zipOrCityName(cityBeingSearched)) {
      searchZipCode(cityBeingSearched);
    } else {
      searchName(cityBeingSearched);
    }
  } catch (error) {
    alert('can\'t Find your city Bub~')
  }
};

const zipOrCityName = (searchInput) => {
  return /\d/.test(searchInput);
}
const searchName = async (city) => {
  //
}

const searchZipCode = async (zipcode) => {
  //
}

searchButton.addEventListener('click', searchLocationWeather, false);