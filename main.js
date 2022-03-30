/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/WeatherApiFunctionality.js":
/*!****************************************!*\
  !*** ./src/WeatherApiFunctionality.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherInSearchedUnits": () => (/* binding */ weatherInSearchedUnits)
/* harmony export */ });
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key.js */ "./src/key.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var weatherInSearchedUnits = function () {
  var currentMinMax = document.querySelector('#current-min-max');
  var currentTemp = document.querySelector('#current-temp');
  var currentWeatherIcon = document.querySelector('#current-weather-icon');
  var forecastDays = document.querySelectorAll('.day-of-week');
  var dayArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  var lowTemps = document.querySelectorAll('.low-temp');
  var highTemps = document.querySelectorAll('.high-temp');
  var weatherSymbols = document.querySelectorAll('.expected-weather');
  var humidityDisplays = document.querySelectorAll('.humidity-display');
  var chanceOfRainDisplays = document.querySelectorAll('.chance-of-rain-display');
  /**
   * takes info provided from fivedayforecast fetch and returns for use of forecast functions
   * @param {*} latitude
   * @param {*} longitude
   * @returns api promise parsed into JSON format
   */

  var retrieveWeatherInformationForForecast = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(latitude, longitude) {
      var openWeatherRepsonse, openWeatherInformation;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(latitude, "&lon=").concat(longitude, "&appid=").concat(_key_js__WEBPACK_IMPORTED_MODULE_0__.key, "&units=").concat(_index_js__WEBPACK_IMPORTED_MODULE_1__.unitsForSearch), {
                mode: 'cors'
              });

            case 3:
              openWeatherRepsonse = _context.sent;
              _context.next = 6;
              return openWeatherRepsonse.json();

            case 6:
              openWeatherInformation = _context.sent;
              return _context.abrupt("return", openWeatherInformation);

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.throwSearchError)();
              console.log(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function retrieveWeatherInformationForForecast(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * takes info from searched city and uses it to populate current day weather/temp
   * @param {*} latitude
   * @param {*} longitude
   * @returns api promise in json format
   */


  var retrieveWeatherInformationForToday = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(latitude, longitude) {
      var todayWeatherResponse, todayWeatherInformation;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(latitude, "&lon=").concat(longitude, "&appid=").concat(_key_js__WEBPACK_IMPORTED_MODULE_0__.key, "&units=").concat(_index_js__WEBPACK_IMPORTED_MODULE_1__.unitsForSearch), {
                mode: 'cors'
              });

            case 3:
              todayWeatherResponse = _context2.sent;
              _context2.next = 6;
              return todayWeatherResponse.json();

            case 6:
              todayWeatherInformation = _context2.sent;
              return _context2.abrupt("return", todayWeatherInformation);

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.throwSearchError)();
              console.log(_context2.t0);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function retrieveWeatherInformationForToday(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * uses retrieveWeatherInformationForToday to get temp info
   * @param {*} tempInformation
   */


  var showAreaCurrentTemp = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(tempInformation) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              try {
                currentTemp.innerText = "".concat(Math.round(tempInformation.main.temp), "\xB0");
                currentMinMax.innerText = "".concat(Math.round(tempInformation.main.temp_min), "\xB0/").concat(Math.round(tempInformation.main.temp_max), "\xB0");
              } catch (error) {
                (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.throwSearchError)();
              }

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function showAreaCurrentTemp(_x5) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * uses retrieveWeatherInformationForToday to weather info
   * @param {*} currentWeatherInformation
   */


  var showCurrentWeather = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(currentWeatherInformation) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              try {
                currentWeatherIcon.src = "http://openweathermap.org/img/wn/".concat(currentWeatherInformation.weather[0].icon, "@2x.png");
              } catch (error) {
                (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.throwSearchError)();
                console.log(error);
              }

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function showCurrentWeather(_x6) {
      return _ref4.apply(this, arguments);
    };
  }();

  var populateForecastDays = function populateForecastDays(daysOfWeek) {
    for (var i = 0; i < daysOfWeek.length; i++) {
      if (forecastDays[i]) {
        forecastDays[i].innerText = dayArray[daysOfWeek[i]];
      }
    }
  };

  var populateForecastWeather = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(weatherConditionsInformation) {
      var i, expectedWeather;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              try {
                for (i = 0; i < weatherSymbols.length; i++) {
                  expectedWeather = weatherConditionsInformation.daily[i].weather[0].icon;
                  weatherSymbols[i].src = "http://openweathermap.org/img/wn/".concat(expectedWeather, "@2x.png");
                }
              } catch (error) {
                (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.throwSearchError)();
              }

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function populateForecastWeather(_x7) {
      return _ref5.apply(this, arguments);
    };
  }();

  var populateForecastHumidity = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(humidityInformation) {
      var i;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              try {
                for (i = 0; i < humidityDisplays.length; i++) {
                  humidityDisplays[i].innerText = humidityInformation.daily[i].humidity + '%';
                }
              } catch (error) {
                (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.throwSearchError)();
              }

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function populateForecastHumidity(_x8) {
      return _ref6.apply(this, arguments);
    };
  }();

  var populateForecastChanceOfRain = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(chanceOfRainInformation) {
      var i;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              try {
                for (i = 0; i < chanceOfRainDisplays.length; i++) {
                  chanceOfRainDisplays[i].innerText = Math.round(chanceOfRainInformation.daily[i].pop * 100) + '%';
                }
              } catch (error) {
                (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.throwSearchError)();
              }

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function populateForecastChanceOfRain(_x9) {
      return _ref7.apply(this, arguments);
    };
  }();

  var populateForecastHighAndLow = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(tempInformation) {
      var storedForecastHighsAndLows, i, j;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              try {
                storedForecastHighsAndLows = {}; //Store all hight and low temp data for forecast

                for (i = 0; i < 5; i++) {
                  storedForecastHighsAndLows["day".concat(i)] = {};
                  storedForecastHighsAndLows["day".concat(i)]['min'] = tempInformation.daily[i].temp.min;
                  storedForecastHighsAndLows["day".concat(i)]['max'] = tempInformation.daily[i].temp.max;
                } //Add to divs in fiveday forecast


                for (j = 0; j < lowTemps.length; j++) {
                  lowTemps[j].innerText = Math.round(storedForecastHighsAndLows["day".concat(j)].min) + '°';
                  highTemps[j].innerText = Math.round(storedForecastHighsAndLows["day".concat(j)].max) + '°';
                }
              } catch (error) {
                (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.throwSearchError)();
              }

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function populateForecastHighAndLow(_x10) {
      return _ref8.apply(this, arguments);
    };
  }();
  /**
   * gets latitude and longitude from city search and
   * uses it to give info to above functions to populate 5 day forecast
   * @param {*} latitude
   * @param {*} longitude
   */


  var showFiveDayForecast = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(latitude, longitude) {
      var fiveDayForecastResponse, dateArray, fiveDayForecastInformation, i, currentDate, j, dayOfWeek, forecastInformation;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return fetch("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(latitude, "&lon=").concat(longitude, "&appid=").concat(_key_js__WEBPACK_IMPORTED_MODULE_0__.key, "&units=").concat(_index_js__WEBPACK_IMPORTED_MODULE_1__.unitsForSearch), {
                mode: 'cors'
              });

            case 3:
              fiveDayForecastResponse = _context9.sent;
              dateArray = [];
              _context9.next = 7;
              return fiveDayForecastResponse.json();

            case 7:
              fiveDayForecastInformation = _context9.sent;

              for (i = 1; i < fiveDayForecastInformation.list.length; i++) {
                currentDate = fiveDayForecastInformation.list[i].dt_txt.substring(0, 10);

                if (dateArray.indexOf(currentDate) === -1) {
                  dateArray.push(currentDate);
                }
              }

              for (j = 0; j < dateArray.length; j++) {
                dayOfWeek = new Date(dateArray[j]);
                dateArray[j] = dayOfWeek.getDay();
              } // Make fetch request from API for all weather information


              _context9.next = 12;
              return retrieveWeatherInformationForForecast(latitude, longitude);

            case 12:
              forecastInformation = _context9.sent;
              // Use forecastInfo to populate page
              populateForecastDays(dateArray);
              populateForecastWeather(forecastInformation);
              populateForecastHumidity(forecastInformation);
              populateForecastChanceOfRain(forecastInformation);
              populateForecastHighAndLow(forecastInformation);
              _context9.next = 23;
              break;

            case 20:
              _context9.prev = 20;
              _context9.t0 = _context9["catch"](0);
              (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.throwSearchError)();

            case 23:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[0, 20]]);
    }));

    return function showFiveDayForecast(_x11, _x12) {
      return _ref9.apply(this, arguments);
    };
  }();

  return {
    populateForecastDays: populateForecastDays,
    showFiveDayForecast: showFiveDayForecast,
    showAreaCurrentTemp: showAreaCurrentTemp,
    showCurrentWeather: showCurrentWeather,
    retrieveWeatherInformationForToday: retrieveWeatherInformationForToday
  };
}();



/***/ }),

/***/ "./src/dayOfMetrics.js":
/*!*****************************!*\
  !*** ./src/dayOfMetrics.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metricsInSearchedUnits": () => (/* binding */ metricsInSearchedUnits)
/* harmony export */ });
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key.js */ "./src/key.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var metricsInSearchedUnits = function () {
  var sunrise = document.querySelector('#sunrise-metric');
  var sunset = document.querySelector('#sunset-metric');
  var dewPoint = document.querySelector('#dewpoint-metric');
  var chanceOfRainToday = document.querySelector('#chance-of-rain-metric');
  var humidity = document.querySelector('#humidity-metric');
  var visibility = document.querySelector('#visibility-metric');
  var feelsLike = document.querySelector('#feels-like-metric');
  var uvIndex = document.querySelector('#uv-index-metric');
  var uvIndexChart = {
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
  };

  var getDayOfMetrics = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(latitude, longitude) {
      var metricsResponse, metricsInformation;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(latitude, "&lon=").concat(longitude, "&appid=").concat(_key_js__WEBPACK_IMPORTED_MODULE_0__.key, "&units=").concat(_index_js__WEBPACK_IMPORTED_MODULE_1__.unitsForSearch), {
                mode: 'cors'
              });

            case 3:
              metricsResponse = _context.sent;
              _context.next = 6;
              return metricsResponse.json();

            case 6:
              metricsInformation = _context.sent;
              return _context.abrupt("return", metricsInformation);

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.throwSearchError)();

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function getDayOfMetrics(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var getSunriseMetric = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sunriseInformation) {
      var dayToCheck, sunriseHour, sunriseMinutes, timeOfSunrise;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              dayToCheck = new Date(sunriseInformation.current.sunrise * 1000);
              sunriseHour = dayToCheck.getHours();
              sunriseMinutes = dayToCheck.getMinutes(); // correcting if minutes are in the single digits

              if (sunriseMinutes.toString().length < 2) {
                sunriseMinutes = '0' + sunriseMinutes;
              }

              timeOfSunrise = "".concat(sunriseHour, ":").concat(sunriseMinutes);
              return _context2.abrupt("return", timeOfSunrise);

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.throwSearchError)();

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function getSunriseMetric(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getSunsetMetric = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(sunsetInformation) {
      var dayToCheck, sunsetHour, sunsetMinutes, timeOfSunset;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              dayToCheck = new Date(sunsetInformation.current.sunset * 1000);
              sunsetHour = dayToCheck.getHours(); // correcting if minutes are in the single digits

              sunsetMinutes = dayToCheck.getMinutes();

              if (sunsetMinutes.toString().length < 2) {
                sunsetMinutes = '0' + sunsetMinutes;
              }

              timeOfSunset = "".concat(sunsetHour, ":").concat(sunsetMinutes);
              return _context3.abrupt("return", timeOfSunset);

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.throwSearchError)();

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 9]]);
    }));

    return function getSunsetMetric(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  var getdewPointMetric = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dewPointInformation) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              return _context4.abrupt("return", Math.floor(dewPointInformation.current.dew_point));

            case 4:
              _context4.prev = 4;
              _context4.t0 = _context4["catch"](0);
              (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.throwSearchError)();

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 4]]);
    }));

    return function getdewPointMetric(_x5) {
      return _ref4.apply(this, arguments);
    };
  }();

  var getChanceOfRain = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(chanceOfRainInformation) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              return _context5.abrupt("return", "".concat(chanceOfRainInformation.daily[0].pop * 100, "%"));

            case 4:
              _context5.prev = 4;
              _context5.t0 = _context5["catch"](0);
              (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.throwSearchError)();

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 4]]);
    }));

    return function getChanceOfRain(_x6) {
      return _ref5.apply(this, arguments);
    };
  }();

  var getHumidity = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(humidityInformation) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              return _context6.abrupt("return", "".concat(humidityInformation.current.humidity, "%"));

            case 4:
              _context6.prev = 4;
              _context6.t0 = _context6["catch"](0);
              (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.throwSearchError)();

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 4]]);
    }));

    return function getHumidity(_x7) {
      return _ref6.apply(this, arguments);
    };
  }();

  var getVisibility = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(visibilityInformation) {
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;

              if (!(_index_js__WEBPACK_IMPORTED_MODULE_1__.unitsForSearch === 'metric')) {
                _context7.next = 5;
                break;
              }

              return _context7.abrupt("return", "".concat(visibilityInformation.current.visibility / 1000, "Km"));

            case 5:
              if (!(_index_js__WEBPACK_IMPORTED_MODULE_1__.unitsForSearch === 'imperial')) {
                _context7.next = 7;
                break;
              }

              return _context7.abrupt("return", "".concat((visibilityInformation.current.visibility / 1000 * 1.609344).toFixed(2), " Miles"));

            case 7:
              _context7.next = 12;
              break;

            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7["catch"](0);
              (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.throwSearchError)();

            case 12:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 9]]);
    }));

    return function getVisibility(_x8) {
      return _ref7.apply(this, arguments);
    };
  }();

  var getWhatTempFeelsLike = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(feelsLikeInformation) {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              return _context8.abrupt("return", "".concat(feelsLikeInformation.current.feels_like, "\xB0"));

            case 4:
              _context8.prev = 4;
              _context8.t0 = _context8["catch"](0);
              (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.throwSearchError)();

            case 7:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 4]]);
    }));

    return function getWhatTempFeelsLike(_x9) {
      return _ref8.apply(this, arguments);
    };
  }();

  var getUvIndex = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(uvIndexInformation) {
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              return _context9.abrupt("return", "".concat(uvIndexInformation.current.uvi, " : ").concat(uvIndexChart[Math.floor(uvIndexInformation.current.uvi)]));

            case 4:
              _context9.prev = 4;
              _context9.t0 = _context9["catch"](0);
              (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.throwSearchError)();

            case 7:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[0, 4]]);
    }));

    return function getUvIndex(_x10) {
      return _ref9.apply(this, arguments);
    };
  }();
  /**
   * gets inputs from index.js and uses it to gather daily metrics from above functions
   * @param {*} latitude 
   * @param {*} longitude 
   */


  var populateDayOfMetrics = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(latitude, longitude) {
      var searchedMetrics, sunriseTime, sunsetTime, dewPointTemp, chanceOfRainPercentage, humidityPercentage, currentVisibility, currentFeltTemp, currentUvIndex;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              _context10.next = 3;
              return getDayOfMetrics(latitude, longitude);

            case 3:
              searchedMetrics = _context10.sent;
              _context10.next = 6;
              return getSunriseMetric(searchedMetrics);

            case 6:
              sunriseTime = _context10.sent;
              sunrise.innerText = sunriseTime; // Populate Sunset

              _context10.next = 10;
              return getSunsetMetric(searchedMetrics);

            case 10:
              sunsetTime = _context10.sent;
              sunset.innerText = sunsetTime; //Populate Dewpoint

              _context10.next = 14;
              return getdewPointMetric(searchedMetrics);

            case 14:
              dewPointTemp = _context10.sent;
              dewPoint.innerText = "".concat(dewPointTemp, "\xB0"); //Populate Chance of Rain

              _context10.next = 18;
              return getChanceOfRain(searchedMetrics);

            case 18:
              chanceOfRainPercentage = _context10.sent;
              chanceOfRainToday.innerText = chanceOfRainPercentage; //Populate Humidity

              _context10.next = 22;
              return getHumidity(searchedMetrics);

            case 22:
              humidityPercentage = _context10.sent;
              humidity.innerText = humidityPercentage; // Populate Visibility Km or miles

              _context10.next = 26;
              return getVisibility(searchedMetrics);

            case 26:
              currentVisibility = _context10.sent;
              visibility.innerText = currentVisibility; // Populate Feels Like

              _context10.next = 30;
              return getWhatTempFeelsLike(searchedMetrics);

            case 30:
              currentFeltTemp = _context10.sent;
              feelsLike.innerText = currentFeltTemp; // Populate Uv Index

              _context10.next = 34;
              return getUvIndex(searchedMetrics);

            case 34:
              currentUvIndex = _context10.sent;
              uvIndex.innerText = currentUvIndex;
              _context10.next = 41;
              break;

            case 38:
              _context10.prev = 38;
              _context10.t0 = _context10["catch"](0);
              (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.throwSearchError)();

            case 41:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[0, 38]]);
    }));

    return function populateDayOfMetrics(_x11, _x12) {
      return _ref10.apply(this, arguments);
    };
  }();

  return {
    populateDayOfMetrics: populateDayOfMetrics
  };
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwSearchError": () => (/* binding */ throwSearchError),
/* harmony export */   "unitsForSearch": () => (/* binding */ unitsForSearch)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./key.js */ "./src/key.js");
/* harmony import */ var _WeatherApiFunctionality_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WeatherApiFunctionality.js */ "./src/WeatherApiFunctionality.js");
/* harmony import */ var _dayOfMetrics_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dayOfMetrics.js */ "./src/dayOfMetrics.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var cityInput = document.querySelector('#city-input');
var searchButton = document.querySelector('#search-button');
var cityDisplay = document.querySelector('#city');
var searchError = document.querySelector('#search-error');
var imperialSelector = document.querySelector('#imperial');
var metricSelector = document.querySelector('#metric');
var unitToggler = document.querySelector('#unit-selector');
var unitsForSearch = 'imperial';
/**
 * choose to view weather in imperial or metric units
 */

var selectDisplayUnit = function selectDisplayUnit() {
  if (unitsForSearch === 'imperial') {
    unitsForSearch = 'metric';
    metricSelector.classList.add('chosen-unit');
    imperialSelector.classList.remove('chosen-unit');
  } else if (unitsForSearch === 'metric') {
    unitsForSearch = 'imperial';
    metricSelector.classList.remove('chosen-unit');
    imperialSelector.classList.add('chosen-unit');
  }

  if (cityDisplay.innerText !== '') {
    cityInput.value = cityDisplay.innerText;
    searchCityByNameOrZipcode();
  }
}; // two functions for clearing search and search errors


var clearCityInput = function clearCityInput() {
  cityInput.value = '';
};

var clearSearchError = function clearSearchError() {
  searchError.innerText = '';
};
/**
 * shows red text error on search form
 */


var throwSearchError = function throwSearchError() {
  if (cityInput.value === '') {
    searchError.innerText = 'Please enter city or zipcode**';
    clearCityInput();
  } else {
    searchError.innerText = 'Location not found**';
    clearCityInput();
  }
};
/**
 * Checks to see if a search is a numberic entry, zipcide, or not
 * @param {*} searchInput
 * @returns boolean on whether or not search is numeric
 */


var zipOrCityName = function zipOrCityName(searchInput) {
  return /\d/.test(searchInput);
};
/**
 * Searches for a city and state combination for specifc location searches
 * @param {*} cityAndState
 * @returns Array with latitude and longitude of search city, state combo
 */


var searchCityAndState = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cityAndState) {
    var cityName, stateName, cityAndStateResponse, cityAndStateInformation;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            cityAndState = cityAndState.split(', ');
            cityName = cityAndState[0];
            stateName = cityAndState[1];
            _context.next = 6;
            return fetch("http://api.openweathermap.org/geo/1.0/direct?q=".concat(cityName, ",").concat(stateName, ",US&appid=").concat(_key_js__WEBPACK_IMPORTED_MODULE_2__.key), {
              mode: 'cors'
            });

          case 6:
            cityAndStateResponse = _context.sent;
            _context.next = 9;
            return cityAndStateResponse.json();

          case 9:
            cityAndStateInformation = _context.sent;
            cityDisplay.innerText = "".concat(cityAndStateInformation[0].name, ", ").concat(cityAndStateInformation[0].state);
            return _context.abrupt("return", [cityAndStateInformation[0].lat, cityAndStateInformation[0].lon]);

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            throwSearchError();

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function searchCityAndState(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Searches API with a city name input
 * @param {*} city
 * @returns array with lat and long of city
 */


var searchName = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(city) {
    var cityResponse, cityInformation;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch("http://api.openweathermap.org/geo/1.0/direct?q=".concat(city, "&appid=").concat(_key_js__WEBPACK_IMPORTED_MODULE_2__.key), {
              mode: 'cors'
            });

          case 3:
            cityResponse = _context2.sent;
            _context2.next = 6;
            return cityResponse.json();

          case 6:
            cityInformation = _context2.sent;

            if (cityInformation[0].name && cityInformation[0].country === 'US') {
              cityDisplay.innerText = "".concat(cityInformation[0].name, ", ").concat(cityInformation[0].state);
            } else {
              cityDisplay.innerText = "".concat(cityInformation[0].name, ", ").concat(cityInformation[0].country);
            }

            return _context2.abrupt("return", [cityInformation[0].lat, cityInformation[0].lon]);

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            throwSearchError();

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function searchName(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * tkaes in a zipcode, checks for cities, and compares location info to make sure selection is specifc
 * @param {*} zipcode
 * @returns array with city lat and long
 */


var searchZipCode = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(zipcode) {
    var zipcodeResponse, zipcodeInformation, stateResponse, stateInformation, latitudeArray, longitudeArray, latitudeToCheck, longitudeToCheck, i, correctLatitude, correctLongitude, j, stateName;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return fetch("http://api.openweathermap.org/geo/1.0/zip?zip=".concat(zipcode, "&appid=").concat(_key_js__WEBPACK_IMPORTED_MODULE_2__.key), {
              mode: 'cors'
            });

          case 3:
            zipcodeResponse = _context3.sent;
            _context3.next = 6;
            return zipcodeResponse.json();

          case 6:
            zipcodeInformation = _context3.sent;
            _context3.next = 9;
            return fetch("http://api.openweathermap.org/geo/1.0/direct?q=".concat(zipcodeInformation.name, ",US&appid=").concat(_key_js__WEBPACK_IMPORTED_MODULE_2__.key, "&limit=10"), {
              mode: 'cors'
            });

          case 9:
            stateResponse = _context3.sent;
            _context3.next = 12;
            return stateResponse.json();

          case 12:
            stateInformation = _context3.sent;
            latitudeArray = [];
            longitudeArray = [];
            latitudeToCheck = zipcodeInformation.lat;
            longitudeToCheck = zipcodeInformation.lon; //Create Array to check latitudes

            for (i = 0; i < stateInformation.length; i++) {
              latitudeArray.push(stateInformation[i].lat);
              longitudeArray.push(stateInformation[i].lon);
            } //compare against searched zipcode latitude


            correctLatitude = latitudeArray.reduce(function (prev, curr) {
              return Math.abs(curr - latitudeToCheck) < Math.abs(prev - latitudeToCheck) ? curr : prev;
            }); //compare against searched longitude zipcode

            correctLongitude = longitudeArray.reduce(function (prev, curr) {
              return Math.abs(curr - longitudeToCheck) < Math.abs(prev - longitudeToCheck) ? curr : prev;
            }); //Find correct state with latitude and longitude

            for (j = 0; j < stateInformation.length; j++) {
              if (stateInformation[j].lat === correctLatitude && stateInformation[j].lon === correctLongitude) {
                stateName = stateInformation[j].state;
                cityDisplay.innerText = "".concat(zipcodeInformation.name, ", ").concat(stateName);
              }
            }

            return _context3.abrupt("return", [zipcodeInformation.lat, zipcodeInformation.lon]);

          case 24:
            _context3.prev = 24;
            _context3.t0 = _context3["catch"](0);
            throwSearchError();

          case 27:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 24]]);
  }));

  return function searchZipCode(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Takes in city input info from form and runs search specific to parameters entered
 * @param {*} cityBeingSearched
 * @returns resolves information to populate current day info and
 * sends info along to metric and weather logic
 */


var searchCityByNameOrZipcode = function searchCityByNameOrZipcode(cityBeingSearched) {
  return new Promise(function (resolve, reject) {
    cityBeingSearched = cityInput.value;

    if (cityBeingSearched === '') {
      throwSearchError();
    }

    if (zipOrCityName(cityBeingSearched)) {
      resolve(searchZipCode(cityBeingSearched));
    } else if (!zipOrCityName(cityBeingSearched) && cityBeingSearched.includes(', ')) {
      resolve(searchCityAndState(cityBeingSearched));
    } else {
      resolve(searchName(cityBeingSearched));
    }
  }).then( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(response) {
      var currentWeatherInformation;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!response) {
                _context4.next = 10;
                break;
              }

              _context4.next = 3;
              return _WeatherApiFunctionality_js__WEBPACK_IMPORTED_MODULE_3__.weatherInSearchedUnits.retrieveWeatherInformationForToday(response[0], response[1]);

            case 3:
              currentWeatherInformation = _context4.sent;
              _WeatherApiFunctionality_js__WEBPACK_IMPORTED_MODULE_3__.weatherInSearchedUnits.showAreaCurrentTemp(currentWeatherInformation);
              _WeatherApiFunctionality_js__WEBPACK_IMPORTED_MODULE_3__.weatherInSearchedUnits.showCurrentWeather(currentWeatherInformation);
              clearSearchError();
              clearCityInput();
              _WeatherApiFunctionality_js__WEBPACK_IMPORTED_MODULE_3__.weatherInSearchedUnits.showFiveDayForecast(response[0], response[1]);
              _dayOfMetrics_js__WEBPACK_IMPORTED_MODULE_4__.metricsInSearchedUnits.populateDayOfMetrics(response[0], response[1]);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }())["catch"](function (error) {
    throwSearchError();
  });
};
/**
 * adding event listeners
 */


searchButton.addEventListener('click', searchCityByNameOrZipcode, false);
cityInput.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    searchCityByNameOrZipcode();
  }
}, false);
unitToggler.addEventListener('click', selectDisplayUnit, false); //Start App with auto population of weather

var AutoPopulatePage = function () {
  cityInput.value = 'Boston';
  searchCityByNameOrZipcode();
}();



/***/ }),

/***/ "./src/key.js":
/*!********************!*\
  !*** ./src/key.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gifKey": () => (/* binding */ gifKey),
/* harmony export */   "key": () => (/* binding */ key)
/* harmony export */ });
var key = 'b14896b06824f6ff66d174d8b8840291';
var gifKey = 'MadxlOH3HNEepudr5vpYlT819K6MMkmm';


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/LiberationSans-Regular.ttf */ "./src/fonts/LiberationSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/LiberationSans-Bold.ttf */ "./src/fonts/LiberationSans-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: main-font;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: chosen-unit;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n/* General styling for full page */\nbody,\nhtml {\n  width: 100%;\n  padding: 5px;\n  margin: 0 auto;\n  box-sizing: border-box;\n  background-color: rgb(75, 174, 240);\n  font-family: main-font;\n}\n\n.light-blue {\n  -webkit-box-shadow: 1px -3px 8px 5px rgba(255, 255, 255, 0.29);\n  box-shadow: 1px -3px 25px 2px rgba(255, 255, 255, 0.29);\n}\n\n/* Page header styling */\n#city-search-form {\n  height: 100px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(214, 218, 241, 0.24);\n  border-radius: 20px;\n}\n\n#city-search-form h2 {\n  font-family: chosen-unit;\n  margin: 0;\n  font-size: 30px;\n  color: white;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: rgb(16, 80, 122);\n}\n\n#search-error {\n  color: rgb(231, 106, 22);\n  font-size: 20px;\n}\n\n#city-input {\n  width: 30%;\n  margin-bottom: 5px;\n}\n\ninput[id='city-input']::-webkit-input-placeholder {\n  color: rgb(16, 80, 122);\n}\n\n#search-button-and-unit-selector {\n  display: flex;\n  justify-content: center;\n  width: 31%;\n}\n\n#search-button {\n  width: 30%;\n  cursor: pointer;\n  border-radius: 5px;\n  line-height: 20px;\n  text-align: center;\n  background-color: rgb(238, 238, 238);\n}\n\n#search-button:hover {\n  -webkit-box-shadow: inset 5px 5px 50px -7px rgba(255, 255, 255, 0.71);\n  box-shadow: inset 5px 5px 50px -7px rgba(255, 255, 255, 0.71);\n}\n\n#unit-selector {\n  padding: 2px 10px;\n  text-align: center;\n  width: 28%;\n  background-color: rgb(238, 238, 238);\n  border-radius: 5px;\n  margin-left: 2%;\n  cursor: pointer;\n}\n\n#unit-selector:hover {\n  font-size: 16.25px;\n  -webkit-box-shadow: inset 5px 5px 16px -7px rgba(255, 255, 255, 0.71);\n  box-shadow: inset 5px 5px 50px -7px rgba(255, 255, 255, 0.71);\n}\n\n.unit {\n  margin: 0;\n  font-size: 15px;\n}\n\n.chosen-unit {\n  font-family: chosen-unit;\n  color: rgb(231, 106, 22);\n}\n\n/* Display for current temp */\n#current-day-display {\n  margin: 20px auto;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  background-position: center;\n  background-size: cover;\n}\n\n.temp-min-max {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-top: 0;\n}\n\n#current-temp {\n  color: white;\n}\n\n#current-min-max {\n  color: white;\n}\n\n#city {\n  margin-bottom: 0;\n  color: white;\n}\n\n/* styling for full five day forecast section */\n#five-day-forecast {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin: 0 auto;\n  border-radius: 20px;\n  background-color: rgba(214, 218, 241, 0.24);\n}\n\n/* styling for label section of forecast */\n#forecast-header {\n  width: 98%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#forecast-header h4 {\n  font-family: chosen-unit;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin: 0;\n  color: white;\n  -webkit-text-stroke-width: 0.5px;\n  -webkit-text-stroke-color: rgb(16, 80, 122);\n}\n\n#header-underline {\n  border: 1px solid black;\n  opacity: 0.2;\n}\n\n/* Styling for individual forecasts */\n.forecast {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 10px 0 10px;\n}\n\n.day-of-week {\n  margin: 0px;\n}\n\n.full-weather {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 25%;\n  grid-row-gap: 0px;\n  align-items: center;\n  width: 81%;\n  color: rgb(63, 62, 62);\n}\n\n.forecast-humidity {\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  justify-content: center;\n}\n\n.expected-weather {\n  height: 60px;\n  width: auto;\n  margin: 0;\n  padding: 0;\n  margin-left: auto;\n}\n\n.high-low-temp {\n  display: flex;\n  font-size: 15px;\n  gap: 5px;\n}\n\n/* styling for day of metrics section */\n\n#day-of-metrics {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 5px;\n  grid-row-gap: 10px;\n  margin: 30px auto 20px auto;\n  width: 100%;\n  background-color: rgba(214, 218, 241, 0.24);\n  border-radius: 20px;\n}\n\n.metric-label {\n  font-size: 15px;\n  font-family: chosen-unit;\n  margin: 10px auto 0px auto;\n  color: white;\n  -webkit-text-stroke-width: 0.5px;\n  -webkit-text-stroke-color: rgb(16, 80, 122);\n}\n\n.label-underline {\n  border: 1px solid black;\n  width: 60%;\n  margin: 0 auto;\n  opacity: 0.2;\n}\n\n#day-of-metrics p {\n  margin: 5px auto 10px auto;\n  color: rgb(63, 62, 62);\n}\n\n#sunrise {\n  grid-area: 1 / 1 / 2 / 2;\n  text-align: center;\n}\n\n#sunset {\n  grid-area: 1 / 2 / 2 / 3;\n  text-align: center;\n}\n\n#dewpoint {\n  grid-area: 1 / 3 / 2 / 4;\n  text-align: center;\n}\n\n#chance-of-rain-today {\n  grid-area: 1 / 4 / 2 / 5;\n  text-align: center;\n}\n\n#humidity {\n  grid-area: 2 / 1 / 3 / 2;\n  text-align: center;\n}\n\n#visibility {\n  grid-area: 2 / 2 / 3 / 3;\n  text-align: center;\n}\n\n#feels-like {\n  grid-area: 2 / 3 / 3 / 4;\n  text-align: center;\n}\n\n#uv-index {\n  grid-area: 2 / 4 / 3 / 5;\n  text-align: center;\n}\n\n/* styling for page footer */\n#footer {\n  height: 100px;\n  margin: 50px auto 0px auto;\n  display: flex;\n  justify-content: space-evenly;\n  text-align: center;\n  align-items: center;\n  background-color: rgba(214, 218, 241, 0.24);\n  border-radius: 20px;\n}\n\n.footer-divider {\n  width: 100%;\n  border: 1px solid black;\n  opacity: 0.2;\n}\n\n#footer,\nh3,\nh5 {\n  color: rgb(63, 62, 62);\n  margin: 2px;\n}\n\n#open-weather-map {\n  width: 100px;\n  height: auto;\n}\n\n/* Styling to fit sections to different screen sizes */\n@media (max-width: 650px) {\n  #city-search-form {\n    height: 100px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(214, 218, 241, 0.24);\n    border-radius: 20px;\n  }\n\n  #city-search-form h2 {\n    font-size: 25px;\n    margin-bottom: 5px;\n  }\n\n  #search-error {\n    font-size: 15px;\n  }\n\n  #city-input {\n    width: 50%;\n    margin-bottom: 1px;\n  }\n\n  #search-button-and-unit-selector {\n    display: flex;\n    justify-content: center;\n    width: 61%;\n  }\n\n  #search-button {\n    width: 80%;\n    cursor: pointer;\n  }\n\n  #unit-selector {\n    padding: 2px 10px;\n    text-align: center;\n    width: 60%;\n    background-color: blanchedalmond;\n    border-radius: 5px;\n    margin-left: 2%;\n    cursor: pointer;\n  }\n\n  .temp-min-max h3 {\n    font-size: 20px;\n  }\n\n  #five-day-forecast p {\n    font-size: 15px;\n  }\n\n  #forecast-header {\n    display: flex;\n    justify-content: space-evenly;\n    gap: 10px;\n  }\n\n  #forecast-header h4 {\n    padding: 0px;\n    font-size: 10px;\n  }\n\n  .day-of-week {\n    margin: 0px;\n    font-size: 15px;\n  }\n\n  .weather-symbol {\n    width: 15px;\n    height: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .full-weather {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 1fr;\n    grid-column-gap: 5px;\n    grid-row-gap: 0px;\n    width: 80%;\n  }\n\n  #day-of-metrics {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n    grid-column-gap: 20px;\n    grid-row-gap: 2px;\n    margin: 40px auto 0 auto;\n    width: 100%;\n    background-color: rgba(214, 218, 241, 0.24);\n    border-radius: 20px;\n  }\n\n  #day-of-metrics h2 {\n    font-size: 12px;\n  }\n\n  #day-of-metrics p {\n    font-size: 12px;\n  }\n\n  #sunrise {\n    grid-area: 1 / 1 / 2 / 2;\n  }\n\n  #sunset {\n    grid-area: 1 / 2 / 2 / 3;\n  }\n\n  #dewpoint {\n    grid-area: 2 / 1 / 3 / 2;\n  }\n\n  #chance-of-rain-today {\n    grid-area: 2 / 2 / 3 / 3;\n  }\n\n  #humidity {\n    grid-area: 3 / 1 / 4 / 2;\n  }\n\n  #visibility {\n    grid-area: 3 / 2 / 4 / 3;\n  }\n\n  #feels-like {\n    grid-area: 4 / 1 / 5 / 2;\n  }\n\n  #uv-index {\n    grid-area: 4 / 2 / 5 / 3;\n  }\n\n  .footer-divider {\n    width: 80%;\n    margin: 0 auto;\n  }\n\n  #footer,\n  h3,\n  h5 {\n    color: rgb(34, 32, 32);\n    margin: 2px;\n    font-size: 10px;\n  }\n\n  #open-weather-map {\n    width: 75px;\n    height: auto;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,4CAA4C;AAC9C;;AAEA;EACE,wBAAwB;EACxB,4CAAyC;AAC3C;;AAEA,kCAAkC;AAClC;;EAEE,WAAW;EACX,YAAY;EACZ,cAAc;EACd,sBAAsB;EACtB,mCAAmC;EACnC,sBAAsB;AACxB;;AAEA;EACE,8DAA8D;EAC9D,uDAAuD;AACzD;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,2CAA2C;EAC3C,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;EACxB,SAAS;EACT,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,2CAA2C;AAC7C;;AAEA;EACE,wBAAwB;EACxB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA;EACE,qEAAqE;EACrE,6DAA6D;AAC/D;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;EACV,oCAAoC;EACpC,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,qEAAqE;EACrE,6DAA6D;AAC/D;;AAEA;EACE,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,wBAAwB;AAC1B;;AAEA,6BAA6B;AAC7B;EACE,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA,+CAA+C;AAC/C;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,cAAc;EACd,mBAAmB;EACnB,2CAA2C;AAC7C;;AAEA,0CAA0C;AAC1C;EACE,UAAU;EACV,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,wBAAwB;EACxB,iBAAiB;EACjB,oBAAoB;EACpB,SAAS;EACT,YAAY;EACZ,gCAAgC;EAChC,2CAA2C;AAC7C;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA,qCAAqC;AACrC;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,uBAAuB;EACvB,oBAAoB;EACpB,iBAAiB;EACjB,mBAAmB;EACnB,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,SAAS;EACT,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,QAAQ;AACV;;AAEA,uCAAuC;;AAEvC;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,oBAAoB;EACpB,kBAAkB;EAClB,2BAA2B;EAC3B,WAAW;EACX,2CAA2C;EAC3C,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,wBAAwB;EACxB,0BAA0B;EAC1B,YAAY;EACZ,gCAAgC;EAChC,2CAA2C;AAC7C;;AAEA;EACE,uBAAuB;EACvB,UAAU;EACV,cAAc;EACd,YAAY;AACd;;AAEA;EACE,0BAA0B;EAC1B,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA,4BAA4B;AAC5B;EACE,aAAa;EACb,0BAA0B;EAC1B,aAAa;EACb,6BAA6B;EAC7B,kBAAkB;EAClB,mBAAmB;EACnB,2CAA2C;EAC3C,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,YAAY;AACd;;AAEA;;;EAGE,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA,sDAAsD;AACtD;EACE;IACE,aAAa;IACb,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,2CAA2C;IAC3C,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,UAAU;IACV,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,eAAe;EACjB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,gCAAgC;IAChC,kBAAkB;IAClB,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,6BAA6B;IAC7B,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,qCAAqC;IACrC,uBAAuB;IACvB,oBAAoB;IACpB,iBAAiB;IACjB,UAAU;EACZ;;EAEA;IACE,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,qBAAqB;IACrB,iBAAiB;IACjB,wBAAwB;IACxB,WAAW;IACX,2CAA2C;IAC3C,mBAAmB;EACrB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,UAAU;IACV,cAAc;EAChB;;EAEA;;;IAGE,sBAAsB;IACtB,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,YAAY;EACd;AACF","sourcesContent":["@font-face {\n  font-family: main-font;\n  src: url(./fonts/LiberationSans-Regular.ttf);\n}\n\n@font-face {\n  font-family: chosen-unit;\n  src: url(./fonts/LiberationSans-Bold.ttf);\n}\n\n/* General styling for full page */\nbody,\nhtml {\n  width: 100%;\n  padding: 5px;\n  margin: 0 auto;\n  box-sizing: border-box;\n  background-color: rgb(75, 174, 240);\n  font-family: main-font;\n}\n\n.light-blue {\n  -webkit-box-shadow: 1px -3px 8px 5px rgba(255, 255, 255, 0.29);\n  box-shadow: 1px -3px 25px 2px rgba(255, 255, 255, 0.29);\n}\n\n/* Page header styling */\n#city-search-form {\n  height: 100px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(214, 218, 241, 0.24);\n  border-radius: 20px;\n}\n\n#city-search-form h2 {\n  font-family: chosen-unit;\n  margin: 0;\n  font-size: 30px;\n  color: white;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: rgb(16, 80, 122);\n}\n\n#search-error {\n  color: rgb(231, 106, 22);\n  font-size: 20px;\n}\n\n#city-input {\n  width: 30%;\n  margin-bottom: 5px;\n}\n\ninput[id='city-input']::-webkit-input-placeholder {\n  color: rgb(16, 80, 122);\n}\n\n#search-button-and-unit-selector {\n  display: flex;\n  justify-content: center;\n  width: 31%;\n}\n\n#search-button {\n  width: 30%;\n  cursor: pointer;\n  border-radius: 5px;\n  line-height: 20px;\n  text-align: center;\n  background-color: rgb(238, 238, 238);\n}\n\n#search-button:hover {\n  -webkit-box-shadow: inset 5px 5px 50px -7px rgba(255, 255, 255, 0.71);\n  box-shadow: inset 5px 5px 50px -7px rgba(255, 255, 255, 0.71);\n}\n\n#unit-selector {\n  padding: 2px 10px;\n  text-align: center;\n  width: 28%;\n  background-color: rgb(238, 238, 238);\n  border-radius: 5px;\n  margin-left: 2%;\n  cursor: pointer;\n}\n\n#unit-selector:hover {\n  font-size: 16.25px;\n  -webkit-box-shadow: inset 5px 5px 16px -7px rgba(255, 255, 255, 0.71);\n  box-shadow: inset 5px 5px 50px -7px rgba(255, 255, 255, 0.71);\n}\n\n.unit {\n  margin: 0;\n  font-size: 15px;\n}\n\n.chosen-unit {\n  font-family: chosen-unit;\n  color: rgb(231, 106, 22);\n}\n\n/* Display for current temp */\n#current-day-display {\n  margin: 20px auto;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  background-position: center;\n  background-size: cover;\n}\n\n.temp-min-max {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-top: 0;\n}\n\n#current-temp {\n  color: white;\n}\n\n#current-min-max {\n  color: white;\n}\n\n#city {\n  margin-bottom: 0;\n  color: white;\n}\n\n/* styling for full five day forecast section */\n#five-day-forecast {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin: 0 auto;\n  border-radius: 20px;\n  background-color: rgba(214, 218, 241, 0.24);\n}\n\n/* styling for label section of forecast */\n#forecast-header {\n  width: 98%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#forecast-header h4 {\n  font-family: chosen-unit;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin: 0;\n  color: white;\n  -webkit-text-stroke-width: 0.5px;\n  -webkit-text-stroke-color: rgb(16, 80, 122);\n}\n\n#header-underline {\n  border: 1px solid black;\n  opacity: 0.2;\n}\n\n/* Styling for individual forecasts */\n.forecast {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 10px 0 10px;\n}\n\n.day-of-week {\n  margin: 0px;\n}\n\n.full-weather {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 25%;\n  grid-row-gap: 0px;\n  align-items: center;\n  width: 81%;\n  color: rgb(63, 62, 62);\n}\n\n.forecast-humidity {\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  justify-content: center;\n}\n\n.expected-weather {\n  height: 60px;\n  width: auto;\n  margin: 0;\n  padding: 0;\n  margin-left: auto;\n}\n\n.high-low-temp {\n  display: flex;\n  font-size: 15px;\n  gap: 5px;\n}\n\n/* styling for day of metrics section */\n\n#day-of-metrics {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 5px;\n  grid-row-gap: 10px;\n  margin: 30px auto 20px auto;\n  width: 100%;\n  background-color: rgba(214, 218, 241, 0.24);\n  border-radius: 20px;\n}\n\n.metric-label {\n  font-size: 15px;\n  font-family: chosen-unit;\n  margin: 10px auto 0px auto;\n  color: white;\n  -webkit-text-stroke-width: 0.5px;\n  -webkit-text-stroke-color: rgb(16, 80, 122);\n}\n\n.label-underline {\n  border: 1px solid black;\n  width: 60%;\n  margin: 0 auto;\n  opacity: 0.2;\n}\n\n#day-of-metrics p {\n  margin: 5px auto 10px auto;\n  color: rgb(63, 62, 62);\n}\n\n#sunrise {\n  grid-area: 1 / 1 / 2 / 2;\n  text-align: center;\n}\n\n#sunset {\n  grid-area: 1 / 2 / 2 / 3;\n  text-align: center;\n}\n\n#dewpoint {\n  grid-area: 1 / 3 / 2 / 4;\n  text-align: center;\n}\n\n#chance-of-rain-today {\n  grid-area: 1 / 4 / 2 / 5;\n  text-align: center;\n}\n\n#humidity {\n  grid-area: 2 / 1 / 3 / 2;\n  text-align: center;\n}\n\n#visibility {\n  grid-area: 2 / 2 / 3 / 3;\n  text-align: center;\n}\n\n#feels-like {\n  grid-area: 2 / 3 / 3 / 4;\n  text-align: center;\n}\n\n#uv-index {\n  grid-area: 2 / 4 / 3 / 5;\n  text-align: center;\n}\n\n/* styling for page footer */\n#footer {\n  height: 100px;\n  margin: 50px auto 0px auto;\n  display: flex;\n  justify-content: space-evenly;\n  text-align: center;\n  align-items: center;\n  background-color: rgba(214, 218, 241, 0.24);\n  border-radius: 20px;\n}\n\n.footer-divider {\n  width: 100%;\n  border: 1px solid black;\n  opacity: 0.2;\n}\n\n#footer,\nh3,\nh5 {\n  color: rgb(63, 62, 62);\n  margin: 2px;\n}\n\n#open-weather-map {\n  width: 100px;\n  height: auto;\n}\n\n/* Styling to fit sections to different screen sizes */\n@media (max-width: 650px) {\n  #city-search-form {\n    height: 100px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(214, 218, 241, 0.24);\n    border-radius: 20px;\n  }\n\n  #city-search-form h2 {\n    font-size: 25px;\n    margin-bottom: 5px;\n  }\n\n  #search-error {\n    font-size: 15px;\n  }\n\n  #city-input {\n    width: 50%;\n    margin-bottom: 1px;\n  }\n\n  #search-button-and-unit-selector {\n    display: flex;\n    justify-content: center;\n    width: 61%;\n  }\n\n  #search-button {\n    width: 80%;\n    cursor: pointer;\n  }\n\n  #unit-selector {\n    padding: 2px 10px;\n    text-align: center;\n    width: 60%;\n    background-color: blanchedalmond;\n    border-radius: 5px;\n    margin-left: 2%;\n    cursor: pointer;\n  }\n\n  .temp-min-max h3 {\n    font-size: 20px;\n  }\n\n  #five-day-forecast p {\n    font-size: 15px;\n  }\n\n  #forecast-header {\n    display: flex;\n    justify-content: space-evenly;\n    gap: 10px;\n  }\n\n  #forecast-header h4 {\n    padding: 0px;\n    font-size: 10px;\n  }\n\n  .day-of-week {\n    margin: 0px;\n    font-size: 15px;\n  }\n\n  .weather-symbol {\n    width: 15px;\n    height: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .full-weather {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 1fr;\n    grid-column-gap: 5px;\n    grid-row-gap: 0px;\n    width: 80%;\n  }\n\n  #day-of-metrics {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n    grid-column-gap: 20px;\n    grid-row-gap: 2px;\n    margin: 40px auto 0 auto;\n    width: 100%;\n    background-color: rgba(214, 218, 241, 0.24);\n    border-radius: 20px;\n  }\n\n  #day-of-metrics h2 {\n    font-size: 12px;\n  }\n\n  #day-of-metrics p {\n    font-size: 12px;\n  }\n\n  #sunrise {\n    grid-area: 1 / 1 / 2 / 2;\n  }\n\n  #sunset {\n    grid-area: 1 / 2 / 2 / 3;\n  }\n\n  #dewpoint {\n    grid-area: 2 / 1 / 3 / 2;\n  }\n\n  #chance-of-rain-today {\n    grid-area: 2 / 2 / 3 / 3;\n  }\n\n  #humidity {\n    grid-area: 3 / 1 / 4 / 2;\n  }\n\n  #visibility {\n    grid-area: 3 / 2 / 4 / 3;\n  }\n\n  #feels-like {\n    grid-area: 4 / 1 / 5 / 2;\n  }\n\n  #uv-index {\n    grid-area: 4 / 2 / 5 / 3;\n  }\n\n  .footer-divider {\n    width: 80%;\n    margin: 0 auto;\n  }\n\n  #footer,\n  h3,\n  h5 {\n    color: rgb(34, 32, 32);\n    margin: 2px;\n    font-size: 10px;\n  }\n\n  #open-weather-map {\n    width: 75px;\n    height: auto;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/LiberationSans-Bold.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/LiberationSans-Bold.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "59d20ec19ebac6748bc6.ttf";

/***/ }),

/***/ "./src/fonts/LiberationSans-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/fonts/LiberationSans-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "da8820812f499c43a195.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./node_modules/regenerator-runtime/runtime.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map