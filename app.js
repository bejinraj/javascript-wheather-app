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
const bangloreSunrise = document.getElementById("bgl-sunrise");
const bangloreSunset = document.getElementById("bgl-sunset");

const tvmCity = document.getElementById("tvm-city");
const tvmSunrise = document.getElementById("tvm-sunrise");
const tvmSunset = document.getElementById("tvm-sunset");

const delhiCity = document.getElementById("delhi-city");
const delhiSunrise = document.getElementById("delhi-sunrise");
const delhiSunset = document.getElementById("delhi-sunset");

const headingTime = document.getElementById("heading-time");
const headingDate = document.getElementById("heading-date");
const headingGreet = document.getElementById("heading-greet");

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
    fetchThiruvananthapuramWeather();
    fetchDelhiWeather();
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

  let sunriseTime = new Date(weatherData.sys.sunrise * 1000);
  let sunsetTime = new Date(weatherData.sys.sunset * 1000);

  for (i = 0; i < bangloreLocation.length; i++) {
    bangloreLocation[i].innerText =
      weatherData.name + ", " + weatherData.sys.country;
  }
  bangloreTemperature.innerHTML = Math.floor(weatherData.main.temp) + "°";
  bangloreWind.innerHTML = Math.floor(weatherData.wind.speed);
  bangloreHum.innerHTML = weatherData.main.humidity;

  bangloreSunrise.innerHTML = moment(sunriseTime).format("hh:mm A");
  bangloreSunset.innerHTML = moment(sunsetTime).format("hh:mm A");
};

let fetchThiruvananthapuramWeather = async () => {
  const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=Thiruvananthapuram&appid=${key}&units=metric`;

  let response = {};

  try {
    response = await fetch(endPoint);
  } catch (err) {
    console.error(err);
  }

  let weatherData = await response.json();

  let sunriseTime = new Date(weatherData.sys.sunrise * 1000);
  let sunsetTime = new Date(weatherData.sys.sunset * 1000);

  tvmCity.innerText = weatherData.name + ", " + weatherData.sys.country;
  tvmSunrise.innerText = moment(sunriseTime).format("hh:mm A");
  tvmSunset.innerText = moment(sunsetTime).format("hh:mm A");
};

let fetchDelhiWeather = async () => {
  const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${key}&units=metric`;

  let response = {};

  try {
    response = await fetch(endPoint);
  } catch (err) {
    console.error(err);
  }

  let weatherData = await response.json();

  let sunriseTime = new Date(weatherData.sys.sunrise * 1000);
  let sunsetTime = new Date(weatherData.sys.sunset * 1000);

  delhiCity.innerText = weatherData.name + ", " + weatherData.sys.country;
  delhiSunrise.innerText = moment(sunriseTime).format("hh:mm A");
  delhiSunset.innerText = moment(sunsetTime).format("hh:mm A");
};


