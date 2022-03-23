import { key } from './key.js';
import { throwSearchError } from './index.js';

const weatherInImperialUnits = (() => {
  const cityInput = document.querySelector('#city-input');
  const searchButton = document.querySelector('#search-button');
  const cityDisplay = document.querySelector('#city');
  const currentTemp = document.querySelector('#current-temp');
  const searchError = document.querySelector('#search-error');
  const forecastDays = document.querySelectorAll('.day-of-week');
  const dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


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
      if (forecastDays[i]) {
        forecastDays[i].innerText = dayArray[daysOfWeek[i]];
      }
    }
  };

  const populateForecastWeather = async (latitude, longitude) => {
    try {
      
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial`,
        {
          mode: 'cors',
        },
      );
      const weatherInformation = await weatherResponse.json();
      
    } catch (error) {
      console.log(error);
    }
  };

  const showFiveDayForecast = async (latitude, longitude) => {
    try {
      const fiveDayForecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial`,
        {
          mode: 'cors',
        },
      );
      let dateArray = [];
      const fiveDayForecastInformation = await fiveDayForecastResponse.json();

      for (let i = 1; i < fiveDayForecastInformation.list.length; i++) {
        let currentDate = fiveDayForecastInformation.list[i].dt_txt.substring(
          0,
          10,
        );
        if (dateArray.indexOf(currentDate) === -1) {
          dateArray.push(currentDate);
        }
      }
      for (let j = 0; j < dateArray.length; j++) {
        let dayOfWeek = new Date(dateArray[j]);
        dateArray[j] = dayOfWeek.getDay();
      }
      populateForecastDays(dateArray);
      populateForecastWeather(latitude, longitude);
    } catch (error) {
      throwSearchError();
    }
  };

  return { populateForecastDays, showFiveDayForecast, showAreaCurrentWeather };
})();

export { weatherInImperialUnits };
