import { key, gifKey } from './key.js';
import { throwSearchError, unitsForSearch } from './index.js';

const weatherInSearchedUnits = (() => {
  const currentMinMax = document.querySelector('#current-min-max');
  const weatherBackground = document.querySelector('#current-day-display');
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
  
  const retrieveWeatherInformation = async (latitude, longitude) => {
    try {
      // const openWeatherRepsonse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unitsForSearch}`, {
      //   mode: 'cors'
      // })
      // const openWeatherInformation = await openWeatherRepsonse.json();
      // return openWeatherInformation;
      console.log(latitude, longitude)
    } catch (error) {
      throwSearchError();
      console.log(error)
    }
  }

  const showAreaCurrentTemp = async () => {
    try {
      const tempResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unitsForSearch}`,
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

  const showCurrentWeather = async (latitude, longitude) => {
    try {
      const currentWeatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unitsForSearch}`,
        {
          mode: 'cors',
        },
      );
      const currentWeatherInformation = await currentWeatherResponse.json();
      currentWeatherIcon.src =  `http://openweathermap.org/img/wn/${currentWeatherInformation.weather[0].icon}@2x.png`
      
      // const weatherBackgroundGif = currentWeatherInformation.weather[0];
      // console.log(weatherBackgroundGif)
      
      // const weatherBackgroundResponse = await fetch(`https://api.giphy.com/v1/gifs/?gif_id=cinemagraph-sunset-cloudy-lOkbL3MJnEtHi&api_key=${gifKey}}`, {
      //   mode: 'cors'
      // })
      // const weatherBackgroundInformation = await weatherBackgroundResponse.json();
      // // const searchedBackgroundImage = (weatherBackgroundInformation.data.images.original.url);
      // console.log('Here I am!!!!!!!!!!!!!!!', weatherBackgroundInformation);
      // weatherBackground.style.cssText = `background-image: url(${searchedBackgroundImage});`
    } catch (error) {
      throwSearchError();
      console.log(error)
    }
  }

  const populateForecastDays = (daysOfWeek) => {
    for (let i = 0; i < daysOfWeek.length; i++) {
      if (forecastDays[i]) {
        forecastDays[i].innerText = dayArray[daysOfWeek[i]];
      }
    }
  };

  const populateForecastWeather = async (latitude, longitude) => {
    try {
      let weatherConditionsResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unitsForSearch}`,
        {
          mode: 'cors',
        },
      );
      const weatherConditionsInformation =
        await weatherConditionsResponse.json();

      // loop through weather symbols and make source API symbol
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

  const populateForecastHumidity = async (latitude, longitude) => {
    try {
      let humidityResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unitsForSearch}`,
        {
          mode: 'cors',
        },
      );
      const humidityInformation = await humidityResponse.json();

      for (let i = 0; i < humidityDisplays.length; i++) {
        humidityDisplays[i].innerText = humidityInformation.daily[i].humidity + '%';
      }
    } catch (error) {
      throwSearchError();
    }
  };

  const populateForecastChanceOfRain = async (latitude, longitude) => {
    try {
      let chanceOfRainResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unitsForSearch}`,
        {
          mode: 'cors',
        },
      );
      const chanceOfRainInformation = await chanceOfRainResponse.json();

      // Loop through chance of rain perday and populate it into forecast
      for (let i = 0; i < chanceOfRainDisplays.length; i++) {
        chanceOfRainDisplays[i].innerText =
          Math.round(chanceOfRainInformation.daily[i].pop * 100) + '%';
      }
    } catch (error) {
      throwSearchError();
    }
  };
  const populateForecastHighAndLow = async (latitude, longitude) => {
    try {
      const storedForecastHighsAndLows = {};
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unitsForSearch}`,
        {
          mode: 'cors',
        },
      );
      const tempInformation = await weatherResponse.json();

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

  const showFiveDayForecast = async (latitude, longitude) => {
    try {
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
      populateForecastDays(dateArray);
      // retrieveWeatherInformation(latitude, longitude);
      populateForecastWeather(latitude, longitude);
      populateForecastHumidity(latitude, longitude);
      populateForecastChanceOfRain(latitude, longitude);
      populateForecastHighAndLow(latitude, longitude);
    } catch (error) {
      throwSearchError();
    }
  };

  return { populateForecastDays, showFiveDayForecast, showAreaCurrentTemp, showCurrentWeather, retrieveWeatherInformation };
})();

export { weatherInSearchedUnits };
