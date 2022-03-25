import { key } from './key.js';
import { throwSearchError, unitsForSearch } from './index.js';

const metricsInSearchedUnits = (() => {
  const sunrise = document.querySelector('#sunrise-metric');
  const sunset = document.querySelector('#sunset-metric');
  const dewPoint = document.querySelector('#dewpoint-metric');
  const chanceOfRainToday = document.querySelector('#chance-of-rain-metric');
  const humidity = document.querySelector('#humidity-metric');
  const visibility = document.querySelector('#visibility-metric');
  const feelsLike = document.querySelector('#feels-like-metric');
  const uvIndex = document.querySelector('#uv-index-metric');

  const getSunriseMetric = async (latitude, longitude) => {
    try {
      let sunriseResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unitsForSearch}`,
        {
          mode: 'cors',
        }
      );
        const sunriseInformation = await sunriseResponse.json();
        const dayToCheck = new Date(sunriseInformation.current.sunrise * 1000);
        const sunriseHour = dayToCheck.getHours();
        let sunriseMinutes = dayToCheck.getMinutes();

        // correcting if minutes are in the single digits
        if(sunriseMinutes.toString().length < 2) {
          sunriseMinutes = '0' + sunriseMinutes
        }
        
        const timeOfSunrise = `${sunriseHour}:${sunriseMinutes}`
        return timeOfSunrise
    } catch (error) {
      throwSearchError();
      console.log(error);
    }
  }
  const getSunsetMetric = async (latitude, longitude) => {
    try {
      let sunsetResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unitsForSearch}`,
        {
          mode: 'cors',
        }
      );
        const sunsetInformation = await sunsetResponse.json();
        const dayToCheck = new Date(sunsetInformation.current.sunset * 1000);
        const sunsetHour = dayToCheck.getHours();
        
        // correcting if minutes are in the single digits
        let sunsetMinutes = dayToCheck.getMinutes();
        if(sunsetMinutes.toString().length < 2) {
          sunsetMinutes = '0' + sunsetMinutes;
        }
        const timeOfSunset = `${sunsetHour}:${sunsetMinutes}`
        return timeOfSunset
    } catch (error) {
      throwSearchError();
      console.log(error);
    }
  }

  const getdewPointMetric = async (latitude, longitude) => {
    try {
      const dewPointResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unitsForSearch}`,
        {
          mode: 'cors',
        }
      );
      const dewPointInformation = await dewPointResponse.json();
      return Math.floor(dewPointInformation.current.dew_point);
    } catch (error) {
      throwSearchError()
    }
  }

  const getChanceOfRain = async (latitude, longitude) => {
    try {
      const chanceOfRainResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unitsForSearch}`,
        {
          mode: 'cors',
        }
      );
      const chanceOfRainInformation = await chanceOfRainResponse.json();
      return `${chanceOfRainInformation.daily[0].pop * 100}%`;
    } catch (error) {
      throwSearchError()
      console.log(error)
    }
  }

  const getHumidity = async (latitude, longitude) => {
    try {
      const humidityResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unitsForSearch}`,
        {
          mode: 'cors',
        }
      );
      const humidityInformation = await humidityResponse.json()
      
      return `${humidityInformation.current.humidity}%`;
    } catch (error) {
      throwSearchError()
      console.log(error)
    }
  }

  const getVisibility = async (latitude, longitude) => {
    try{
      const visibilityResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unitsForSearch}`,
        {
          mode: 'cors',
        }
      );
      const visibilityInformation = await visibilityResponse.json();

      if(unitsForSearch === 'metric') {
        return `${visibilityInformation.current.visibility / 1000}Km`
      } else if (unitsForSearch === 'imperial') {
        return `${((visibilityInformation.current.visibility / 1000) * 1.609344).toFixed
        (2)} Miles`
      }
    } catch (error) {
      throwSearchError();
      console.log(error)
    }
  }

  const getWhatTempFeelsLike = async (latitude, longitude) => {
    try {
      const feelsLikeResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unitsForSearch}`,
        {
          mode: 'cors',
        }
      );
      const feelsLikeInformation = await feelsLikeResponse.json();
      return `${feelsLikeInformation.current.feels_like}°`
    } catch (error) {
      throwSearchError()
      console.log(error);
    }
  }

  const populateDayOfMetrics = async (latitude, longitude) => {
    try {
      // Populate Sunrise
      const sunriseTime = await getSunriseMetric(latitude, longitude);
      sunrise.innerText = sunriseTime;

      // Populate Sunset
      const sunsetTime = await getSunsetMetric(latitude, longitude);
      sunset.innerText = sunsetTime;

      //Populate Dewpoint
      const dewPointTemp = await getdewPointMetric(latitude, longitude);
      dewPoint.innerText = `${dewPointTemp}°`;

      //Populate Chance of Rain
      const chanceOfRainPercentage = await getChanceOfRain(latitude, longitude);
      chanceOfRainToday.innerText = chanceOfRainPercentage;

      //Populate Humidity
      const humidityPercentage = await getHumidity(latitude, longitude);
      humidity.innerText = humidityPercentage;

      // Populate Visibility Km or miles
      const currentVisibility = await getVisibility(latitude, longitude)
      visibility.innerText = currentVisibility;

      // Populate Feels Like
      const currentFeltTemp = await getWhatTempFeelsLike(latitude, longitude);
      feelsLike.innerText = currentFeltTemp;
    } catch (error) {
      throwSearchError()
      console.log(error);
    }
  }

  return { populateDayOfMetrics };
})()

export { metricsInSearchedUnits };