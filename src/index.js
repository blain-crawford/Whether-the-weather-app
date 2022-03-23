import 'regenerator-runtime/runtime';
import './styles.css';
import { key } from './key.js';
import{ showFiveDayForecastInImperialUnits } from './fiveDayImperial.js'

const cityInput = document.querySelector('#city-input');
const searchButton = document.querySelector('#search-button');
const cityDisplay = document.querySelector('#city');
const currentTemp = document.querySelector('#current-temp');
const searchError = document.querySelector('#search-error');
const forecastDays = document.querySelectorAll('.day-of-week');
const dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const clearCityInput = () => {
  cityInput.value = '';
};

const clearSearchError = () => {
  searchError.innerText = '';
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

const searchCityAndState = async (cityAndState) => {
  try {
    cityAndState = cityAndState.split(', ')
    const cityName = cityAndState[0];
    const stateName = cityAndState[1];
    const cityAndStateResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateName},US&appid=${key}`, {
      mode: 'cors'
    })
    const cityAndStateInformation = await cityAndStateResponse.json();
    cityDisplay.innerText = `${cityAndStateInformation[0].name}, ${cityAndStateInformation[0].state}`;

    return [cityAndStateInformation[0].lat, cityAndStateInformation[0].lon];

  } catch (error) {
    throwSearchError();
    console.log(error)
  }
}

const searchName = async (city) => {
  try {
    const cityResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`,
      {
        mode: 'cors',
      },
    );
    const cityInformation = await cityResponse.json();
    
    if (cityInformation[0].name && cityInformation[0].country === 'US') {
      cityDisplay.innerText = `${cityInformation[0].name}, ${cityInformation[0].state}`;
    } else {
      cityDisplay.innerText = `${cityInformation[0].name}, ${cityInformation[0].country}`;
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

    const stateResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${zipcodeInformation.name},US&appid=${key}&limit=10`,
      {
        mode: 'cors',
      },
    );

    const stateInformation = await stateResponse.json();
    const latitudeArray = [];
    const longitudeArray = [];
    const latitudeToCheck = zipcodeInformation.lat;
    const longitudeToCheck = zipcodeInformation.lon;

    //Create Array to check latitudes
    for (let i = 0; i < stateInformation.length; i++) {
      latitudeArray.push(stateInformation[i].lat);
      longitudeArray.push(stateInformation[i].lon);
    }

    //compare against searched zipcode latitude
    const correctLatitude = latitudeArray.reduce(function (prev, curr) {
      return Math.abs(curr - latitudeToCheck) < Math.abs(prev - latitudeToCheck)
        ? curr
        : prev;
    });

    //compare against searched longitude zipcode
    const correctLongitude = longitudeArray.reduce(function (prev, curr) {
      return Math.abs(curr - longitudeToCheck) < Math.abs(prev - longitudeToCheck)
        ? curr
        : prev;
    });
    
    //Find correct state with latitude and longitude
    for (let j = 0; j < stateInformation.length; j++) {
      if (stateInformation[j].lat === correctLatitude && stateInformation[j].lon === correctLongitude) {
        let stateName = stateInformation[j].state;
        cityDisplay.innerText = `${zipcodeInformation.name}, ${stateName}`;
      }
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

const searchCityByNameOrZipcode = () => {
  return new Promise((resolve, reject) => {
    const cityBeingSearched = cityInput.value;
    if (cityBeingSearched === '') {
      throwSearchError();
    }
    if (zipOrCityName(cityBeingSearched)) {
      resolve(searchZipCode(cityBeingSearched));
    } else if(!zipOrCityName(cityBeingSearched) && cityBeingSearched.includes(', ')) {
      resolve(searchCityAndState(cityBeingSearched));
    } else {
      resolve(searchName(cityBeingSearched));
    }
  })
    .then((response) => {
      if (response) {
        showAreaCurrentWeather(response[0], response[1]);
        clearSearchError();
        clearCityInput();
        showFiveDayForecastInImperialUnits.showFiveDayForecast(response[0], response[1]);
      }
    })
    .catch((error) => {
      throwSearchError();
      console.log('this is error?')
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

export { throwSearchError }
