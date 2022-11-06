/*json строка*/
const jSonString = 
`{
  "name":"Anton",
  "age":36,
  "skills":["Javascript","HTML","CSS"],
  "salary":80000
}`
/*парсим в JS*/
const data = JSON.parse(jSonString);

/*создаем объект*/
const result = {
  name: data.name,
  age: data.age,
  skills: data.skills,
  salary: data.salary
}

/*выводим объект*/
console.log(result);

/*создаем JSON из объекта и выводим в консоль*/
console.log(JSON.stringify(result)); 