
const thunderweatherlist = ["thunderstorm with light rain", "thunderstorm with rain", "thunderstorm with heavy rain", "light thunderstorm", "thunderstorm", "heavy thunderstorm", "ragged thunderstorm", "thunderstorm with light drizzle", "thunderstorm with drizzle", "thunderstorm with heavy drizzle"];
const drizzleweatherlist = ["light intensity drizzle", "drizzle", "heavy intensity drizzle", "light intensity drizzle rain", "drizzle rain", "heavy intensity drizzle rain", "shower rain and drizzle", "heavy shower rain and drizzle", "shower drizzle"];
const rainweatherlist = ["light rain", "moderate rain", "heavy intensity rain", "very heavy rain", "extreme rain", "freezing rain", "light intensity shower rain", "shower rain", "heavy intensity shower rain", "ragged shower rain"];
const snowweatherlist = ["light snow", "snow", "heavy snow", "sleet", "light shower sleet", "shower sleet", "light rain and snow", "rain and snow", "light shower snow", "shower snow", "heavy shower snow"];
const atomosphereweatherlist = ["mist", "smoke", "haze", "sand/dust whirls", "fog", "sand", "dust", "volcanic ash", "squalls", "tornado"];
const clearsky = ["clear sky"];
const cloudyweatherlist = ["few clouds", "scattered clouds", "broken clouds", "overcast clouds"];

const weathers = {
  thunder: thunderweatherlist,
  drizzle: drizzleweatherlist,
  rain: rainweatherlist,
  snow: snowweatherlist,
  atmosphere: atomosphereweatherlist,
  clear: clearsky,
  clouds: cloudyweatherlist,
};

function getcatergories(description) {
  for (const category in weathers) {
    if (weathers[category].includes(description)) {
      console.log(category);
      return category;
    }
  }
  return "unknown";
} 

async function getweather() {
  const city = document.getElementById("city");
  
  
  const apiurl = `https://github.dev{city.value}`;


  try {
    const getdaapikey = await fetch(apiurl);
    let answer = await getdaapikey.json();

    if (answer.cod === "404" || getdaapikey.status === 404) {
      document.getElementById("weather").innerHTML = "City not found!";
      return;
    }

   
    let weatherdescription = answer.weather[0].description;
    const category = getcatergories(weatherdescription);
    
    document.getElementById("weather").innerHTML = `
      <h2 class="Cityname">${answer.name}</h2>
      <p class="Temperature"> ${answer.main.temp}°C</p>
      <p> ${answer.weather[0].description}</p>
      <p> Wind: ${answer.wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById("weather").innerHTML = "Error connecting to server.";
  }
}

