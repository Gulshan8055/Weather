const key = `69538dd5a758f09630e73cd84b723882`;
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".wether-icon");

async function checkWether(city) {
  const key = `69538dd5a758f09630e73cd84b723882`;
  const response = await fetch(url + city + `&appid=${key}`);
  if (response.status == 404) {
    document.querySelector("error").style.display = "block";
    document.querySelector(".wether").style.display = "none";
  } else {
    const data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Cloud") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".wether").style.display = "Block";
    document.querySelector("error").style.display = "none";
  }
}
searchbtn.addEventListener("click", () => {
  checkWether(search.value);
});
