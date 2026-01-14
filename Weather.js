const apiKey = "7edf81e72a5b610f3d2aac8639bb1515";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";
async function checkWeather() {
  const response = await fetch(apiURL + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°c";

  document.querySelector(".weather").innerHTML = data.weather[0].description;
}

checkWeather();
