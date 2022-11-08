// Пример API запроса: https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=latitude&long=longitude.

const apiURL = "https://api.ipgeolocation.io/timezone";
const apiKey = "32bcd4a6e4b548968e7afcdb682ac679";

function pageLoaded() {
  const btn = document.getElementById("button");
  const output = document.getElementById("output");
  
  btn.addEventListener("click", getLocation);
  
  function getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
    } else {
      writeOutput("В вашем браузере недоступна возможность определения местоположения");
    }
  }
  
  function locationSuccess(data) {
    let coords = [data.coords.longitude, data.coords.latitude];
    let url = formatURL(coords);
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let outputText = formatOutput(data);
        writeOutput(outputText);
      })
  }
  
  function locationError() {
    writeOutput("При определении местоположения произошла ошибка");
  }
  
  function formatURL(coords) {
    let url = new URL(apiURL);
    url.searchParams.set("apiKey", apiKey);
    url.searchParams.set("lat", coords[1]);
    url.searchParams.set("lon", coords[0]);
    return url;
  }
  
  function formatOutput(data) {
    
    let html = `
      <p>Временная зона, в которой находится пользователь: ${data.timezone}</p>
      <p>Местные дата и время: ${data.date_time_txt}</p>
    `;
    return html;
  }
  
  function writeOutput(message) {
    output.innerHTML = message;
  }
}

document.addEventListener("DOMContentLoaded", pageLoaded);