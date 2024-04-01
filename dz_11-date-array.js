// Цель: Создание функции для обработки массива строк, содержащих потенциальные даты.

// Контекст задания:
// Вы работаете с парсером или API, который предоставляет строки, потенциально содержащие даты.
// Некоторые строки действительно являются датами, другие нет.
// Примеры входных данных:

// Верные даты: "10.02.22", "11.12.23"
// Неверные данные: "0.13.22", "41.12"
// Задание:

// Разработайте функцию, принимающую массив строк.
// Функция должна анализировать каждую строку:
// Отфильтровать невалидные даты.
// Преобразовать валидные даты к единому формату.
// Условия валидации дат:

// Форматы дат: DD.MM.YY или MM/DD/YY.
// День не может быть больше 31.
// Месяц не может быть больше 12.
// Учитывать високосные года для февраля (опционально).
// Результат:

// Отфильтрованный и преобразованный массив содержащий только даты в едином формате.
const dateArrayStr1 = ['29-02-1980', "29-02-1982", "29-02-2022", "29-02-2024",'31-03-2022','31-04-2022', "28-02-2022", 'тест', '12/30/2022', '00/12/2022', "12/31/0000", '41/12/2023']
function stringToArray(str) {
  let day, month, year;
  if (str.includes('/')) {
    [month, day, year] = str.split('/');
  } else if (str.includes('-')) {
    [day, month, year] = str.split('-');
  }
  if (!year || isNaN(day) || isNaN(month) || isNaN(year)) {
    return null;
  }
  return [day, month, year];
}

function filterDateStr(){
  let formatDate = [];
  for (let i = 0; i < dateArrayStr1.length; i++) {
    formatDate.push(stringToArray(dateArrayStr1[i]));
  }
  return formatDate.filter(elem => Array.isArray(elem));
}

function filterNumberofDays(filterNum) {
let monthsArray = [];
let numMonth = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  for (let k = numMonth.length - 2; k >= 0; k = k - 2) {
    for (let i = 0; i < filterNum.length; i++) {
      if((filterNum[i][1] === numMonth[k] && filterNum[i][0] <= 31) || (filterNum[i][1] === numMonth[k + 1] && filterNum[i][0] <= 30 )){
        monthsArray.push(filterNum[i]);
      }
    }
  }
  for (let i = monthsArray.length - 1; i>= 0; i--) {
  if(monthsArray[i][2] % 4 !== 0 && monthsArray[i][0] == 29 && monthsArray[i][1].includes("02")){
      monthsArray.splice(monthsArray.indexOf(monthsArray[i]),1);
    }
  }
return monthsArray.map(elem => elem.join("-"));
}
console.log(filterNumberofDays(filterDateStr()));