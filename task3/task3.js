/*функция при загрузке страницы*/
function pageLoaded(){
    const myJSON = localStorage.getItem('myJSON');
    /*если данные есть*/
    if (myJSON){
        let dataJson = JSON.parse(myJSON);
        const name = dataJson.name;
        const date = dataJson.date; 
        const time = dataJson.time; 
        alert(`Добрый день,${name}! Давно не виделись. 
        В последний раз вы были у нас ${date} в ${time}`);
        dataJson.date = new Date().toLocaleDateString();
        dataJson.time = new Date().toLocaleTimeString().slice(0,-3);
        localStorage.setItem('myJSON', JSON.stringify(dataJson));
    }
    /*данных нет*/
    else{
        const name = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя', 'введите имя');
        const date = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString().slice(0,-3);
        let json = {
          name:name,
          date:date,
          time:time
        }
        localStorage.setItem('myJSON', JSON.stringify(json));
        
    }
}

document.addEventListener("DOMContentLoaded", pageLoaded);