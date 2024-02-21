const cityInput = document.querySelector(".inputText");
const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  const cityName = cityInput.value;
  await getData(cityName);
});

const getData = async (nameOfCity) => {
  try {
    const API = "cce2a4dad07a4cc743a4bedf5f7c0db8";

    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${nameOfCity}&units=metric&lang=tr&appid=${API}`;
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data);

    const city = document.querySelector("#sehir");
    city.textContent = `${data.name}, ${data.sys.country}`;

    const temp = document.querySelector("#sicaklik");
    temp.textContent = `Sıcaklık : ${data.main.temp} °C`;

    const humidity = document.querySelector("#humidity");
    humidity.textContent = `Nem :%${data.main.humidity}`;

    const wind = document.querySelector("#wind");
    wind.textContent = `Rüzgar : ${data.wind.deg} ° ' den ${data.wind.speed} kt`;

    const weather = document.querySelector("#havaDurumu");
    weather.textContent = `Hava: ${data.weather[0].description}`;

    const feelsLike = document.querySelector("#hissedilen");
    feelsLike.textContent = `Hissedilen Sıcaklık :${data.main.feels_like} °C`;
  } catch (error) {
    console.log("Hata :", error);
  }

  cityInput.value = "";
  cityInput.focus();
};
