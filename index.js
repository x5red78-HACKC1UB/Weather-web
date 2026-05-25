
const thunderweatherlist=[
  "thunderstorm with light rain",

"thunderstorm with rain",

"thunderstorm with heavy rain",

"light thunderstorm",

"thunderstorm",

"heavy thunderstorm",

"ragged thunderstorm",

"thunderstorm with light drizzle",

"thunderstorm with drizzle",

"thunderstorm with heavy drizzle",
];

const drizzleweatherlist=[
  "light intensity drizzle",

"drizzle",

"heavy intensity drizzle",

"light intensity drizzle rain",

"drizzle rain",

"heavy intensity drizzle rain",

"shower rain and drizzle",

"heavy shower rain and drizzle",

"shower drizzle"
];

const rainweatherlist=[
  "light rain",

"moderate rain",

"heavy intensity rain",

"very heavy rain",

"extreme rain",

"freezing rain",

"light intensity shower rain",

"shower rain",

"heavy intensity shower rain",

"ragged shower rain"
];

const snowweatherlist=[
  "light snow",

"snow",

"heavy snow",

"sleet",

"light shower sleet",

"shower sleet",

"light rain and snow",

"rain and snow",

"light shower snow",

"shower snow",

"heavy shower snow"
];

const atomosphereweatherlist=[
  "mist",

"smoke",

"haze",

"sand/dust whirls",

"fog",

"sand",

"dust",

"volcanic ash",

"squalls",

"tornado"
];
const clearsky=[
"clear sky"
];
const cloudyweatherlist=[
  "few clouds",
  "scattered clouds",
  "broken clouds",
  "overcast clouds"
];








async function getweather() {
    const city= document.getElementById("city");
   const apikey="66708e4d83f6fb4191ba8b679cdbd3ed";

 const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=66708e4d83f6fb4191ba8b679cdbd3ed&units=metric`;
const getdaapikey= await fetch(apiurl);
let answer= await getdaapikey.json();

  if (answer.cod === "404") {
     document.getElementById("weather").innerHTML = "City not found!";
    return;
  }
   document.getElementById("weather").innerHTML = `
    <h2 class="Cityname">${answer.name}</h2>
    <p class="Temperature"> ${answer.main.temp}°C</p>
    <p> ${answer.weather[0].description}</p>
    <p> Wind: ${answer.wind.speed} m/s</p>
  `;
}
