import 'regenerator-runtime/runtime';
import './styles.css';
import { key } from './key.js';

const cityInput = document.querySelector('#city-input');
const searchButton = document.querySelector('#search-button');
const cityDisplay = document.querySelector('#city');
const currentTemp = document.querySelector('#current-temp');
const searchError = document.querySelector('#search-error');
const forecastDays = document.querySelectorAll('.day-of-week');
const dayArray = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
];


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
      
    if (cityInformation[0].name && cityInformation[0].state) {
      cityDisplay.innerText = `${cityInformation[0].name}, ${cityInformation[0].state}`;
    } else if (cityInformation[0].name && !cityInformation[0].state) {
      cityDisplay.innerText = `${cityInformation[0].name, cityInformation[0].country}`
    }

    return [cityInformation[0].lat, cityInformation[0].lon];
  } catch (error) {
    throwSearchError();
  }
};

//Still need to find a way to show state!!!!!
const searchZipCode = async (zipcode) => {
  try {
    const zipcodeResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode}&appid=${key}`,
      {
        mode: 'cors',
      },
    );

    const zipcodeInformation = await zipcodeResponse.json();

    const stateResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${zipcodeInformation.name}&appid=${key}`,
      {
        mode: 'cors'
      });
    
    const stateInformation = await stateResponse.json() 
    if (zipcodeInformation.name && stateInformation[0].name) {
      `${cityDisplay.innerText = zipcodeInformation.name}, ${stateInformation[0].state}`;
    }
    return [zipcodeInformation.lat, zipcodeInformation.lon];
  } catch (error) {
    throwSearchError();
  }
};

const showAreaCurrentWeather = async (latitude, longitude) => {
  try {
    const weatherSearch = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial`,
      {
        mode: 'cors',
      },
    );

    const weatherInformation = await (await weatherSearch).json();
    currentTemp.innerText = `${Math.floor(weatherInformation.main.temp)}°`;
  } catch (error) {
    throwSearchError();
  }
};

const populateForecastDays = (daysOfWeek) => {
  for (let i = 0; i < daysOfWeek.length; i++) {
    forecastDays[i].innerText = dayArray[daysOfWeek[i]];
  }
};

const showFiveDayForecast = async (latitude, longitude) => {
  const fiveDayForecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`, 
  {
    mode: 'cors'
  })

  let dateArray = [];
  const fiveDayForecastInformation = await fiveDayForecastResponse.json()
 
  for(let i = 1; i < fiveDayForecastInformation.list.length; i++) {
    let currentDate = fiveDayForecastInformation.list[i].dt_txt.substring(0, 10)
    if(dateArray.indexOf(currentDate) === -1) {
      dateArray.push(currentDate) 
    }
  }
  for(let j = 0; j < dateArray.length; j++) {
    let dayOfWeek = new Date(dateArray[j]);
    dateArray[j] = dayOfWeek.getDay()
  }
  populateForecastDays(dateArray);
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
      if (response) {
        showAreaCurrentWeather(response[0], response[1]);
        showFiveDayForecast(response[0], response[1]);
      }
      clearCityInput();
    })
    .catch((error) => {
      throwSearchError();
    });
};

/**
 * adding event listeners
 */
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
