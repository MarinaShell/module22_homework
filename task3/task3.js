
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
      let outputText = formatOutput(data);
      writeOutput(outputText);
  }
  

  function locationError() {
    writeOutput("При определении местоположения произошла ошибка");
  }
    
  function formatOutput(data) {
    let html = `
    <p>Размеры экрана пользователя: ширина (${window.screen.width} пкс), высота (${window.screen.height} пкс))</p>  
    <p>Координаты местонахождения пользователя: долгота (${data.coords.longitude}&deg;), широта (${data.coords.latitude}&deg;)</p>
      
    `;
    return html;
  }
  
  function writeOutput(message) {
    output.innerHTML = message;
  }
}

document.addEventListener("DOMContentLoaded", pageLoaded);