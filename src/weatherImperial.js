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
  const lowTemps = document.querySelectorAll('.low-temp');
  const highTemps = document.querySelectorAll('.high-temp');
  

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
        forecastDays[i].innerText = dayArray[daysOfWeek[i + 1]];
      } 
    }
  };

  const populateForecastWeather = async (latitude, longitude) => {
    try {
      let weatherConditionsResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial`,
        {
          mode: 'cors',
        },
      )

    const weatherConditionsInformation = await weatherConditionsResponse.json()
    console.log(weatherConditionsInformation.data);
    } catch (error) {
      throwSearchError()
      console.log(error)
    }
  }

  const populateForecastHighAndLow = async (latitude, longitude) => {
    try {
      const storedForecastHighsAndLows = {};
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial`,
        {
          mode: 'cors',
        },
      );
      const weatherInformation = await weatherResponse.json();
      

      //Store all hight and low temp data for forecast
      for (let i = 1; i < 6; i++) {
        storedForecastHighsAndLows[`day${i}`] = {}
        storedForecastHighsAndLows[`day${i}`]['min'] = weatherInformation.daily[i].temp.min
        storedForecastHighsAndLows[`day${i}`]['max'] = weatherInformation.daily[i].temp.max
      }

      
      //Add to divs in fiveday forecast 
      for(let j = 0; j < lowTemps.length; j++){
        lowTemps[j].innerText = Math.floor(storedForecastHighsAndLows[`day${j + 1}`].min) + '°F';
        highTemps[j].innerText = Math.floor(storedForecastHighsAndLows[`day${j + 1}`].max) + '°F';
        
      }

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
      populateForecastHighAndLow(latitude, longitude);
      populateForecastWeather(latitude, longitude);
    } catch (error) {
      throwSearchError();
      console.log(error);
    }
  };

  return { populateForecastDays, showFiveDayForecast, showAreaCurrentWeather };
})();

export { weatherInImperialUnits };
