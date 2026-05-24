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
    <h2>${answer.name}</h2>
    <p class="Temperature"> ${answer.main.temp}°C</p>
    <p> ${answer.weather[0].description}</p>
    <p> Wind: ${answer.wind.speed} m/s</p>
  `;
}
