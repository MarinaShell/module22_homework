//Так как "wss://echo.websocket.org/" умер, то используем:;
const wsUri = "wss://ws.ifelse.io/";

function pageLoaded() {
  const infoOutput = document.querySelector(".info_output");
  const chatOutput = document.querySelector(".chat_output");
  const input = document.querySelector("input");
  const sendBtn = document.querySelector("#send");
  const geolocationBtn = document.querySelector("#geolocation");
  
  let socket = new WebSocket(wsUri);
  
  socket.onopen = () => {
    infoOutput.innerText = "Соединение установлено";
  }
  
  socket.onmessage = (event) => {
    writeToChat(event.data, true);
  }
  
  socket.onerror = () => {
    infoOutput.innerText = "При передаче данных произошла ошибка";
  }
  
  sendBtn.addEventListener("click", sendMessage);
  geolocationBtn.addEventListener("click", sendGeolocation);

  function sendMessage() {
    if (!input.value) return;
    socket.send(input.value);
    writeToChat(input.value, false);
    input.value = "";
  }

  function sendGeolocation() {
    if ("geolocation" in navigator) {
      let locationOptions = {
        enableHighAccuracy: true
      };
      navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
    } else {
      writeOutput("Ваш браузер не поддерживает функцию определения местоположения");
    }
  }
  
  function locationSuccess(data) {
    let link = `https://www.openstreetmap.org/#map=?4/${data.coords.latitude},${data.coords.longitude}`;
    writeToChat(`<a href="${link}" target="_blank">Вы находитесь здесь</a>`);
  }
  
  function locationError() {
    writeOutput("При получении местоположения произошла ошибка");
  }
  
  function writeOutput(message) {
    output.innerHTML = `<p>${message}</p>`;
  }

  function writeToChat(message, isRecieved) {
    let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`;
    chatOutput.innerHTML += messageHTML;
  }
}

document.addEventListener("DOMContentLoaded", pageLoaded);