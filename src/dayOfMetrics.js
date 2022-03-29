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
  const uvIndexChart = {
    0: 'low',
    1: 'Low',
    2: 'Low',
    3: 'Medium',
    4: 'Medium',
    5: 'Medium',
    6: 'High',
    7: 'High',
    8: 'High',
    9: 'Very High',
    10: 'Very High',
    11: 'Extreme'
  }

  const getDayOfMetrics = async (latitude, longitude) => {
    try {
      let metricsResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unitsForSearch}`,
        {
          mode: 'cors',
        }
      );
        const metricsInformation = await metricsResponse.json();
        return metricsInformation;
    } catch (error) {
      throwSearchError();
      console.log(error);
    }
  }

  const getSunriseMetric = async (sunriseInformation) => {
    try {
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
  const getSunsetMetric = async (sunsetInformation) => {
    try {
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

  const getdewPointMetric = async (dewPointInformation) => {
    try {
      return Math.floor(dewPointInformation.current.dew_point);
    } catch (error) {
      throwSearchError()
    }
  }

  const getChanceOfRain = async (chanceOfRainInformation) => {
    try {
      return `${chanceOfRainInformation.daily[0].pop * 100}%`;
    } catch (error) {
      throwSearchError()
      console.log(error)
    }
  }

  const getHumidity = async (humidityInformation) => {
    try {
      return `${humidityInformation.current.humidity}%`;
    } catch (error) {
      throwSearchError()
      console.log(error)
    }
  }

  const getVisibility = async (visibilityInformation) => {
    try{
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

  const getWhatTempFeelsLike = async (feelsLikeInformation) => {
    try {
      return `${feelsLikeInformation.current.feels_like}°`
    } catch (error) {
      throwSearchError()
      console.log(error);
    }
  }

  const getUvIndex = async (uvIndexInformation) => {
    try {
      return(`${uvIndexInformation.current.uvi} : ${uvIndexChart[Math.floor(uvIndexInformation.current.uvi)]}`);
    } catch (error) {
      throwSearchError();
      console.log(error)
    }

  }

  const populateDayOfMetrics = async (latitude, longitude) => {
    try {
      // Get Metrics info from API
      const searchedMetrics = await getDayOfMetrics(latitude, longitude)

      // Populate Sunrise
      const sunriseTime = await getSunriseMetric(searchedMetrics);
      sunrise.innerText = sunriseTime;

      // Populate Sunset
      const sunsetTime = await getSunsetMetric(searchedMetrics);
      sunset.innerText = sunsetTime;

      //Populate Dewpoint
      const dewPointTemp = await getdewPointMetric(searchedMetrics);
      dewPoint.innerText = `${dewPointTemp}°`;

      //Populate Chance of Rain
      const chanceOfRainPercentage = await getChanceOfRain(searchedMetrics);
      chanceOfRainToday.innerText = chanceOfRainPercentage;

      //Populate Humidity
      const humidityPercentage = await getHumidity(searchedMetrics);
      humidity.innerText = humidityPercentage;

      // Populate Visibility Km or miles
      const currentVisibility = await getVisibility(searchedMetrics)
      visibility.innerText = currentVisibility;

      // Populate Feels Like
      const currentFeltTemp = await getWhatTempFeelsLike(searchedMetrics);
      feelsLike.innerText = currentFeltTemp;

      // Populate Uv Index
      const currentUvIndex = await getUvIndex(searchedMetrics);
      uvIndex.innerText = currentUvIndex;
    } catch (error) {
      throwSearchError()
      console.log(error);
    }
  }

  return { populateDayOfMetrics };
})()

export { metricsInSearchedUnits };