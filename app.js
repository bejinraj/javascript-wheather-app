const currentLocation = document.getElementsByClassName("main-location");
const WeatherIcon = document.getElementById("weather-icon");
const currentDate = document.getElementById("current-date");
const curLocTempValue = document.getElementById("temp-value");
const curLocTemp = document.getElementById("climate-condition");
const curLocWindSpeed = document.getElementById("wind-speed");
const curLocHumSpeed = document.getElementById("hum-speed");
const curLocSunrise = document.getElementById("sunrise-current-loc");
const curLocSunset = document.getElementById("sunset-current-loc");

const chennaiLocation = document.getElementsByClassName("chn-city");
const chennaiTemperature = document.getElementById("chn-temp");
const chennaiWind = document.getElementById("chn-wind");
const chennaiHum = document.getElementById("chn-hum");
const chennaiSunrise = document.getElementById("chn-sunrise");
const chennaiSunset = document.getElementById("chn-sunset");

const bangloreLocation = document.getElementsByClassName("bgl-city");
const bangloreTemperature = document.getElementById("bgl-temp");
const bangloreWind = document.getElementById("bgl-wind");
const bangloreHum = document.getElementById("bgl-hum");

const headingTime = document.getElementById("heading-time");
const headingDate = document.getElementById("heading-date");
const headingGreet = document.getElementById("heading-greet");

const airCondition = document.getElementById("air-condition");
const airConditionDesc = document.getElementById("air-condition-desc");
const airIcon = document.getElementById("air-icon");
const airPm2 = document.getElementById("pm-2");
const airPm10 = document.getElementById("pm-10");
const airSo2 = document.getElementById("so-2");
const airNo2 = document.getElementById("no-2");
const airO3 = document.getElementById("o-3");
const airCo = document.getElementById("co");

const day01Day = document.getElementById("day-1-day");
const day01Card = document.getElementById("day-1-card");
const day01Deg = document.getElementById("day-1-deg");
const day01Icon = document.getElementById("day-1-icon");

const day02Day = document.getElementById("day-2-day");
const day02Card = document.getElementById("day-2-card");
const day02Icon = document.getElementById("day-2-icon");
const day02Deg = document.getElementById("day-2-deg");

const day03Day = document.getElementById("day-3-day");
const day03Card = document.getElementById("day-3-card");
const day03Icon = document.getElementById("day-3-icon");
const day03Deg = document.getElementById("day-3-deg");

const day04Day = document.getElementById("day-4-day");
const day04Card = document.getElementById("day-4-card");
const day04Icon = document.getElementById("day-4-icon");
const day04Deg = document.getElementById("day-4-deg");

const day05Day = document.getElementById("day-5-day");
const day05Card = document.getElementById("day-5-card");
const day05Icon = document.getElementById("day-5-icon");
const day05Deg = document.getElementById("day-5-deg");

const key = "5de547ef3b85b938f2cae74eae8bcc9f";

let obj = {};
const KELVIN = 273;

let hours = moment().format("H");

if (hours < 12) {
  headingGreet.innerText = "Good Morning";
} else if (hours < 16) {
  headingGreet.innerText = "Good Afternoon";
} else if (hours < 20) {
  headingGreet.innerText = "Good Evening";
} else if (hours < 24) {
  headingGreet.innerText = "Good Night";
}

headingTime.innerHTML = moment().format("hh:mm A");
headingDate.innerHTML = moment().format("dddd, D MMMM, YYYY");

window.addEventListener("load", () => {
  navigator.geolocation.getCurrentPosition((e) => {
    obj.latitude = e.coords.latitude;
    obj.longitude = e.coords.longitude;
    fetchCurrentCityWeather();
    fetchChennaiWeather();
    fetchBangloreWeather();
    fetchCurLocAirPollution();
    fetchClimate();
  });
});

let fetchCurrentCityWeather = async () => {
  const endPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${obj.latitude}&lon=${obj.longitude}&appid=${key}&units=metric`;
  let response = {};

  try {
    response = await fetch(endPoint);
  } catch (err) {
    console.error(err);
  }

  let weatherData = await response.json();
  console.log(weatherData);

  let climateDesc = weatherData.weather[0].main;

  if (climateDesc == "Clouds") {
    WeatherIcon.innerHTML = "<img src='./img/clouds.png' alt='weather-img' />";
    day01Icon.innerHTML = "<img src='./img/clouds.png' alt='weather-img' />";
    day02Icon.innerHTML = "<img src='./img/clouds.png' alt='weather-img' />";
    day03Icon.innerHTML = "<img src='./img/clouds.png' alt='weather-img' />";
    day04Icon.innerHTML = "<img src='./img/clouds.png' alt='weather-img' />";
    day05Icon.innerHTML = "<img src='./img/clouds.png' alt='weather-img' />";
  } else if (climateDesc == "Thunderstorm") {
    WeatherIcon.innerHTML =
      "<img src='./img/thunderstrom.png' alt='weather-img' />";
    day01Icon.innerHTML =
      "<img src='./img/thunderstrom.png' alt='weather-img' />";
    day02Icon.innerHTML =
      "<img src='./img/thunderstrom.png' alt='weather-img' />";
    day03Icon.innerHTML =
      "<img src='./img/thunderstrom.png' alt='weather-img' />";
    day04Icon.innerHTML =
      "<img src='./img/thunderstrom.png' alt='weather-img' />";
    day05Icon.innerHTML =
      "<img src='./img/thunderstrom.png' alt='weather-img' />";
  } else if (climateDesc == "Drizzle") {
    WeatherIcon.innerHTML = "<img src='./img/drizzle.png' alt='weather-img' />";
    day01Icon.innerHTML = "<img src='./img/drizzle.png' alt='weather-img' />";
    day02Icon.innerHTML = "<img src='./img/drizzle.png' alt='weather-img' />";
    day03Icon.innerHTML = "<img src='./img/drizzle.png' alt='weather-img' />";
    day04Icon.innerHTML = "<img src='./img/drizzle.png' alt='weather-img' />";
    day05Icon.innerHTML = "<img src='./img/drizzle.png' alt='weather-img' />";
    day01Icon.innerHTML = "<img src='./img/drizzle.png' alt='weather-img' />";
  } else if (climateDesc == "Rain") {
    WeatherIcon.innerHTML = "<img src='./img/rain.png' alt='weather-img' />";
    day01Icon.innerHTML = "<img src='./img/rain.png' alt='weather-img' />";
    day02Icon.innerHTML = "<img src='./img/rain.png' alt='weather-img' />";
    day03Icon.innerHTML = "<img src='./img/rain.png' alt='weather-img' />";
    day04Icon.innerHTML = "<img src='./img/rain.png' alt='weather-img' />";
    day05Icon.innerHTML = "<img src='./img/rain.png' alt='weather-img' />";
  } else if (climateDesc == "Snow") {
    WeatherIcon.innerHTML = "<img src='./img/snow.png' alt='weather-img' />";
    day01Icon.innerHTML = "<img src='./img/snow.png' alt='weather-img' />";
    day02Icon.innerHTML = "<img src='./img/snow.png' alt='weather-img' />";
    day03Icon.innerHTML = "<img src='./img/snow.png' alt='weather-img' />";
    day04Icon.innerHTML = "<img src='./img/snow.png' alt='weather-img' />";
    day05Icon.innerHTML = "<img src='./img/snow.png' alt='weather-img' />";
  } else if (climateDesc == "Atmosphere") {
    WeatherIcon.innerHTML =
      "<img src='./img/atmosphere.png' alt='weather-img' />";
    day01Icon.innerHTML =
      "<img src='./img/atmosphere.png' alt='weather-img' />";
    day02Icon.innerHTML =
      "<img src='./img/atmosphere.png' alt='weather-img' />";
    day03Icon.innerHTML =
      "<img src='./img/atmosphere.png' alt='weather-img' />";
    day04Icon.innerHTML =
      "<img src='./img/atmosphere.png' alt='weather-img' />";
    day05Icon.innerHTML =
      "<img src='./img/atmosphere.png' alt='weather-img' />";
  } else if (climateDesc == "Clear") {
    WeatherIcon.innerHTML = "<img src='./img/clear.png' alt='weather-img' />";
    day01Icon.innerHTML = "<img src='./img/clear.png' alt='weather-img' />";
    day02Icon.innerHTML = "<img src='./img/clear.png' alt='weather-img' />";
    day03Icon.innerHTML = "<img src='./img/clear.png' alt='weather-img' />";
    day04Icon.innerHTML = "<img src='./img/clear.png' alt='weather-img' />";
    day05Icon.innerHTML = "<img src='./img/clear.png' alt='weather-img' />";
  }

  let todayDate = new Date(weatherData.dt * 1000);
  let sunriseTime = new Date(weatherData.sys.sunrise * 1000);
  let sunsetTime = new Date(weatherData.sys.sunset * 1000);

  for (i = 0; i < currentLocation.length; i++) {
    currentLocation[i].innerHTML =
      weatherData.name + ", " + weatherData.sys.country;
  }
  currentDate.innerText = moment(todayDate).format("Do MMMM");
  curLocTempValue.innerHTML = Math.floor(weatherData.main.temp);
  curLocTemp.innerText = weatherData.weather[0].main;
  curLocWindSpeed.innerHTML = Math.floor(weatherData.wind.speed);
  curLocHumSpeed.innerHTML = weatherData.main.humidity + " %";

  curLocSunrise.innerHTML = moment(sunriseTime).format("hh:mm A");
  curLocSunset.innerHTML = moment(sunsetTime).format("hh:mm A");
};

let fetchChennaiWeather = async () => {
  const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=${key}&units=metric`;

  let response = {};

  try {
    response = await fetch(endPoint);
  } catch (err) {
    console.error(err);
  }

  let weatherData = await response.json();

  let sunriseTime = new Date(weatherData.sys.sunrise * 1000);
  let sunsetTime = new Date(weatherData.sys.sunset * 1000);

  for (i = 0; i < chennaiLocation.length; i++) {
    chennaiLocation[i].innerText =
      weatherData.name + ", " + weatherData.sys.country;
  }
  chennaiTemperature.innerHTML = Math.floor(weatherData.main.temp) + "°";
  chennaiWind.innerHTML = Math.floor(weatherData.wind.speed);
  chennaiHum.innerHTML = weatherData.main.humidity;

  chennaiSunrise.innerHTML = moment(sunriseTime).format("hh:mm A");
  chennaiSunset.innerHTML = moment(sunsetTime).format("hh:mm A");
};

let fetchBangloreWeather = async () => {
  const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=${key}&units=metric`;

  let response = {};

  try {
    response = await fetch(endPoint);
  } catch (err) {
    console.error(err);
  }

  let weatherData = await response.json();

  for (i = 0; i < bangloreLocation.length; i++) {
    bangloreLocation[i].innerText =
      weatherData.name + ", " + weatherData.sys.country;
  }
  bangloreTemperature.innerHTML = Math.floor(weatherData.main.temp) + "°";
  bangloreWind.innerHTML = Math.floor(weatherData.wind.speed);
  bangloreHum.innerHTML = weatherData.main.humidity;
};

let fetchCurLocAirPollution = async () => {
  const endPoint = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${obj.latitude}&lon=${obj.longitude}&appid=${key}&units=metric`;

  let response = {};

  try {
    response = await fetch(endPoint);
  } catch (err) {
    console.error(err);
  }

  let weatherData = await response.json();
  let aqi = 0;

  aqi = weatherData.list[0].main.aqi;
  if (aqi <= 50) {
    airCondition.innerHTML = "Good";
    airCondition.style.color = "green";
    airIcon.style.color = "green";
    airConditionDesc.innerHTML = "A perfect day for a walk!";
  } else if (aqi <= 100) {
    airCondition.innerHTML = "Moderate ";
    airCondition.style.color = "Yellow";
    airIcon.style.color = "Yellow";
    airConditionDesc.innerHTML = "The air quality is satisfactory";
  } else if (aqi <= 150) {
    airCondition.innerHTML = "Sensitive Groups";
    airCondition.style.color = "Orange";
    airIcon.style.color = "Orange";
    airConditionDesc.innerHTML = "May suffer health consequences";
  } else if (aqi <= 200) {
    airCondition.innerHTML = "Unhealthy ";
    airCondition.style.color = "Red";
    airIcon.style.color = "Red";
    airConditionDesc.innerHTML = "Peoples may suffer health implications";
  } else if (aqi <= 300) {
    airCondition.innerHTML = "Very Unhealthy";
    airCondition.style.color = "Purple";
    airIcon.style.color = "Purple";
    airConditionDesc.innerHTML = "Health warning";
  } else if (aqi > 300) {
    airCondition.innerHTML = "Hazardous";
    airCondition.style.color = "Maroon";
    airIcon.style.color = "Maroon";
    airConditionDesc.innerHTML = "Taking a step outdoors maybe fatal";
  }

  airPm2.innerText = Math.floor(weatherData.list[0].components.pm2_5);
  airPm10.innerText = Math.floor(weatherData.list[0].components.pm10);
  airSo2.innerText = Math.floor(weatherData.list[0].components.so2);
  airNo2.innerText = Math.floor(weatherData.list[0].components.o3);
  airO3.innerText = Math.floor(weatherData.list[0].components.no2);
  airCo.innerText = Math.floor(weatherData.list[0].components.co);
};

let fetchClimate = async () => {
  const endPoint = `http://api.openweathermap.org/data/2.5/forecast?lat=${obj.latitude}&lon=${obj.longitude}&appid=${key}&units=metric`;

  let response = {};

  try {
    response = await fetch(endPoint);
  } catch (err) {
    console.error(err);
  }

  let weatherData = await response.json();

  let day01 = new Date(weatherData.list[0].dt * 1000);
  let day02 = new Date(weatherData.list[8].dt * 1000);
  let day03 = new Date(weatherData.list[16].dt * 1000);
  let day04 = new Date(weatherData.list[24].dt * 1000);
  let day05 = new Date(weatherData.list[39].dt * 1000);

  day01Day.innerHTML = moment(day01).format("Do, MMMM YYYY");
  day01Card.innerHTML = moment(day01).format("dddd hh A");
  day01Deg.innerHTML = Math.floor(weatherData.list[0].main.temp) + "&deg";

  day02Day.innerHTML = moment(day02).format("Do, MMMM YYYY");
  day02Card.innerHTML = moment(day02).format("dddd hh A");
  day02Deg.innerHTML = Math.floor(weatherData.list[8].main.temp) + "&deg";

  day03Day.innerHTML = moment(day03).format("Do, MMMM YYYY");
  day03Card.innerHTML = moment(day03).format("dddd hh A");
  day03Deg.innerHTML = Math.floor(weatherData.list[16].main.temp) + "&deg";

  day04Day.innerHTML = moment(day04).format("Do, MMMM YYYY");
  day04Card.innerHTML = moment(day04).format("dddd hh A");
  day04Deg.innerHTML = Math.floor(weatherData.list[23].main.temp) + "&deg";

  day05Day.innerHTML = moment(day05).format("Do, MMMM YYYY");
  day05Card.innerHTML = moment(day05).format("dddd hh A");
  day05Deg.innerHTML = Math.floor(weatherData.list[32].main.temp) + "&deg";
};
