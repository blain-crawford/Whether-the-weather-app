import './styles.css'
import { key } from './key.js'
const cityInput = document.querySelector('#city-input');
const submitButton = document.querySelector('#submmit-button');

const searchLocationWeather = async () => {
  const location = cityInput.value; 
  console.log(location);
  cityInput.value = ''
};

// const searchName = async (city) => {
//   //
// }

// const searchZipCode = async (zipcode) => {

// }

// submitButton.addEventListener('click', searchLocationWeather, false);