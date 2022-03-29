import { key, gifKey } from './key.js';
import { throwSearchError, unitsForSearch } from './index.js';

const weatherInSearchedUnits = (() => {
  const currentMinMax = document.querySelector('#current-min-max');
  const currentTemp = document.querySelector('#current-temp');
  const currentWeatherIcon = document.querySelector('#current-weather-icon');
  const forecastDays = document.querySelectorAll('.day-of-week');
  const dayArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const lowTemps = document.querySelectorAll('.low-temp');
  const highTemps = document.querySelectorAll('.high-temp');
  const weatherSymbols = document.querySelectorAll('.expected-weather');
  const humidityDisplays = document.querySelectorAll('.humidity-display');
  const chanceOfRainDisplays = document.querySelectorAll(
    '.chance-of-rain-display',
  );
  
  /**
   * takes info provided from fivedayforecast fetch and returns for use of forecast functions
   * @param {*} latitude 
   * @param {*} longitude 
   * @returns api promise parsed into JSON format
   */
  const retrieveWeatherInformationForForecast = async (latitude, longitude) => {
    try {
      const openWeatherRepsonse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unitsForSearch}`,
        {
          mode: 'cors',
        },
      );
      const openWeatherInformation = await openWeatherRepsonse.json();

      return openWeatherInformation;
    } catch (error) {
      throwSearchError();
      console.log(error);
    }
  };

  /**
   * takes info from searched city and uses it to populate current day weather/temp
   * @param {*} latitude 
   * @param {*} longitude 
   * @returns api promise in json format
   */
  const retrieveWeatherInformationForToday = async (latitude, longitude) => {
    try {
      const todayWeatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unitsForSearch}`,
        {
          mode: 'cors',
        },
      );
      const todayWeatherInformation = await todayWeatherResponse.json();
      return todayWeatherInformation
    } catch (error) {
      throwSearchError();
      console.log(error)
    }
  }

  /**
   * uses retrieveWeatherInformationForToday to get temp info
   * @param {*} tempInformation 
   */
  const showAreaCurrentTemp = async (tempInformation) => {
    try {
      currentTemp.innerText = `${Math.floor(tempInformation.main.temp)}°`;
      currentMinMax.innerText = `${Math.floor(
        tempInformation.main.temp_min,
      )}°/${Math.floor(tempInformation.main.temp_max)}°`;
    } catch (error) {
      throwSearchError();
    }
  };

  /**
   * uses retrieveWeatherInformationForToday to weather info
   * @param {*} currentWeatherInformation 
   */
  const showCurrentWeather = async (currentWeatherInformation) => {
    try {
      currentWeatherIcon.src = `http://openweathermap.org/img/wn/${currentWeatherInformation.weather[0].icon}@2x.png`;
    } catch (error) {
      throwSearchError();
      console.log(error);
    }
  };

  const populateForecastDays = (daysOfWeek) => {
    for (let i = 0; i < daysOfWeek.length; i++) {
      if (forecastDays[i]) {
        forecastDays[i].innerText = dayArray[daysOfWeek[i]];
      }
    }
  };

  const populateForecastWeather = async (weatherConditionsInformation) => {
    try {
      for (let i = 0; i < weatherSymbols.length; i++) {
        let expectedWeather =
          weatherConditionsInformation.daily[i].weather[0].icon;
        weatherSymbols[
          i
        ].src = `http://openweathermap.org/img/wn/${expectedWeather}@2x.png`;
      }
    } catch (error) {
      throwSearchError();
    }
  };

  const populateForecastHumidity = async (humidityInformation) => {
    try {
      for (let i = 0; i < humidityDisplays.length; i++) {
        humidityDisplays[i].innerText =
          humidityInformation.daily[i].humidity + '%';
      }
    } catch (error) {
      throwSearchError();
    }
  };

  const populateForecastChanceOfRain = async (chanceOfRainInformation) => {
    try {
      for (let i = 0; i < chanceOfRainDisplays.length; i++) {
        chanceOfRainDisplays[i].innerText =
          Math.round(chanceOfRainInformation.daily[i].pop * 100) + '%';
      }
    } catch (error) {
      throwSearchError();
    }
  };

  const populateForecastHighAndLow = async (tempInformation) => {
    try {
      const storedForecastHighsAndLows = {};

      //Store all hight and low temp data for forecast
      for (let i = 0; i < 5; i++) {
        storedForecastHighsAndLows[`day${i}`] = {};
        storedForecastHighsAndLows[`day${i}`]['min'] =
          tempInformation.daily[i].temp.min;
        storedForecastHighsAndLows[`day${i}`]['max'] =
          tempInformation.daily[i].temp.max;
      }

      //Add to divs in fiveday forecast
      for (let j = 0; j < lowTemps.length; j++) {
        lowTemps[j].innerText =
          Math.floor(storedForecastHighsAndLows[`day${j}`].min) + '°';
        highTemps[j].innerText =
          Math.floor(storedForecastHighsAndLows[`day${j}`].max) + '°';
      }
    } catch (error) {
      throwSearchError();
    }
  };

  /**
   * gets latitude and longitude from city search and 
   * uses it to give info to above functions to populate 5 day forecast
   * @param {*} latitude 
   * @param {*} longitude 
   */
  const showFiveDayForecast = async (latitude, longitude) => {
    try {
      //Getting information to populate array for displaying day names in forecast
      const fiveDayForecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unitsForSearch}`,
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

      // Make fetch request from API for all weather information
      const forecastInformation = await retrieveWeatherInformationForForecast(
        latitude,
        longitude,
      );

      // Use forecastInfo to populate page
      populateForecastDays(dateArray);
      populateForecastWeather(forecastInformation);
      populateForecastHumidity(forecastInformation);
      populateForecastChanceOfRain(forecastInformation);
      populateForecastHighAndLow(forecastInformation);

    } catch (error) {
      throwSearchError();
    }
  };

  return {
    populateForecastDays,
    showFiveDayForecast,
    showAreaCurrentTemp,
    showCurrentWeather,
    retrieveWeatherInformationForToday
  };
})();

export { weatherInSearchedUnits };
