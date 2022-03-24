import 'regenerator-runtime/runtime';
import './styles.css';
import { key } from './key.js';
import{ weatherInImperialUnits } from './weatherImperial.js'
import { weatherInMetricUnits } from './weatherMetric.js';

const cityInput = document.querySelector('#city-input');
const searchButton = document.querySelector('#search-button');
const cityDisplay = document.querySelector('#city');
const searchError = document.querySelector('#search-error');
const imperialSelector = document.querySelector('#imperial');
const metricSelector = document.querySelector('#metric');
const unitToggler = document.querySelector('#unit-selector');
let imperialUnits = true;

const selectDisplayUnit = () => {
  if (imperialUnits) {
    imperialUnits = false;
    metricSelector.classList.add('chosen-unit');
    imperialSelector.classList.remove('chosen-unit');
    
  } else {
    imperialUnits = true
    metricSelector.classList.remove('chosen-unit');
    imperialSelector.classList.add('chosen-unit');
  }
  if(cityDisplay.innerText !== '') {
    cityInput.value = cityDisplay.innerText
    searchCityByNameOrZipcode();
  }
}

const clearCityInput = () => {
  cityInput.value = '';
};

const clearSearchError = () => {
  searchError.innerText = '';
};

const throwSearchError = () => {
  if (cityInput.value === '') {
    searchError.innerText = 'Please enter city or zipcode**';
    clearCityInput();
  } else {
    searchError.innerText = 'Location not found**';
    clearCityInput();
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


const searchCityByNameOrZipcode = (cityBeingSearched) => {
  return new Promise((resolve, reject) => {
    cityBeingSearched = cityInput.value;
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
      if (response && imperialUnits) {
        weatherInImperialUnits.showAreaCurrentTemp(response[0], response[1]);
        weatherInImperialUnits.showCurrentWeather(response[0], response[1]);
        clearSearchError();
        clearCityInput();
        weatherInImperialUnits.showFiveDayForecast(response[0], response[1]);
      } else if (response && !imperialUnits) {
          weatherInMetricUnits.showAreaCurrentTemp(response[0], response[1]);
          weatherInMetricUnits.showCurrentWeather(response[0], response[1]);
          clearSearchError();
          clearCityInput();
          weatherInMetricUnits.showFiveDayForecast(response[0], response[1]);
      }
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
unitToggler.addEventListener('click', selectDisplayUnit, false)

//Start App with auto population of weather
// searchCityByNameOrZipcode('Tipton');

export { throwSearchError }
