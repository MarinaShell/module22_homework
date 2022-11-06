/*возвращаем целое число*/
function getRandomInt(max){
    return Math.floor(Math.random()*max);
}
/*функция для promise*/
function usePromise(){
    const myPromise = new Promise((resolve, reject) =>{
          setTimeout(()=>{
          let number = getRandomInt(100);   
          if (number%2 == 0)
              resolve(`2.Сгенерированное число - ${number}`);
          else
              reject(`2.Завершено с ошибкой - ${number}`);                
       },3000);
      
     });

    /*выполняем promise*/
    myPromise
    .then((result) => {
         console.log(result);
        })
    .catch((error) => {
         console.log(error);
        })
    .finally(()=>{
         console.log('3. Функция выполнилась');
    })
}


console.log('1. Запускаем функцию с promise');
usePromise();
