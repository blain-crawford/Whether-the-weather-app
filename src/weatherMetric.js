import { key } from './key.js';
import { throwSearchError } from './index.js';

const weatherInMetricUnits = (() => {
  const cityInput = document.querySelector('#city-input');
  const searchButton = document.querySelector('#search-button');
  const cityDisplay = document.querySelector('#city');
  const currentMinMax = document.querySelector('#current-min-max');
  const currentTemp = document.querySelector('#current-temp');
  const currentWeatherIcon = document.querySelector('#current-weather-icon');
  const searchError = document.querySelector('#search-error');
  const forecastDays = document.querySelectorAll('.day-of-week');
  const dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const lowTemps = document.querySelectorAll('.low-temp');
  const highTemps = document.querySelectorAll('.high-temp');
  const weatherSymbols = document.querySelectorAll('.expected-weather');
  const humidityDisplays = document.querySelectorAll('.humidity-display');
  const chanceOfRainDisplays = document.querySelectorAll(
    '.chance-of-rain-display',
  );
  
  const showAreaCurrentTemp = async (latitude, longitude) => {
    try {
      const tempResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`,
        {
          mode: 'cors',
        },
      );

      const tempInformation = await tempResponse.json();
      currentTemp.innerText = `${Math.floor(tempInformation.main.temp)}°`;
      currentMinMax.innerText = `${Math.floor(tempInformation.main.temp_min)}°/${Math.floor(tempInformation.main.temp_max)}°`
      
    } catch (error) {
      throwSearchError();
    }
  };
  

  return {  };
})();

export { weatherInMetricUnits };
