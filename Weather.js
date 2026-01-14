const apiKey = "96ba874e5dc2e14250031665eb38f3b1";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".app-wrap input");
async function checkWeather(city) {
  const response = await fetch(apiURL + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°c";

  document.querySelector(".weather").innerHTML = data.weather[0].description;
}
searchBox.addEventListener("keydown", (e) => {
  if (e.key == -"Enter") checkWeather(searchBox.value);
});
checkWeather(city);
