function dispplayTemperature(response) {
  console.log(response.data.main.temp);
}

let apiKey = "d78e071d9d2a90c9a4f0918bd303e097";
let apiURL = `api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(dispplayTemperature);

console.log(apiURL);
