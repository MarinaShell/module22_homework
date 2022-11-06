/*xml который необходимо парсить*/
const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

/*получение данных*/
const parser = new DOMParser();
const xmlDom = parser.parseFromString(xmlString, "text/xml");
/*массив*/
let result = [];
const student = xmlDom.querySelectorAll("student");
/*заполняем массив*/
for (let i = 0; i < student.length; i++) 
{  
  const name = student[i].querySelector("name");
  const first = name.querySelector("first");
  const second = name.querySelector("second");
  const age = student[i].querySelector("age");
  const prof = student[i].querySelector("prof");
  const lang = name.getAttribute("lang");

  result[i] = {
    name: first.textContent + " " + second.textContent,
    age: Number(age.textContent),
    prof: prof.textContent,
    lang: lang
  }
}

/*создаем объект*/
const list = {
  list: result
};

console.log(list);
