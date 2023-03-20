
// Variable to Store the Element => Done
// Function to get the data from weather app
// Manipluate the variable of already created element

let countryName = document.getElementById('countryName');
let stateName = document.getElementById('stateName');
let cityName = document.getElementById('cityName');
let humidity = document.getElementById('humidity');
let windSpeed = document.getElementById('windSpeed');
let temprature = document.getElementById('temprature');
let weatherStatus = document.getElementById('weatherStatus');
let logoImage = document.getElementById('logoImage');
let inputBox = document.getElementById('inputBox');


let getData = async(event) => {

  event.preventDefault();

  if (!inputBox.value) {
    alert("please enter valid city name")
    return;
  }

  let city = inputBox.value;

  let fetchData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=<key>&q=${city}`
  );

  let data = await fetchData.json();
  countryName.innerText= data.location.country;
  stateName.innerText= data.location.region;
  cityName.innerText= data.location.name;
  humidity.innerText= data.current.humidity;
  windSpeed.innerText= data.current.wind_kph;
  temprature.innerText= data.current.temp_c;
  // weatherStatus.innerText= data.location.country;
  logoImage.src= data.current.condition.icon;
  // inputBox.innerText= data.location.country;
}
