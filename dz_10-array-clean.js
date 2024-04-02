// Реализовать функцию, выполняющую обратную операцию фильтрации массива чисел.

// Функция принимает в качестве аргументов другую функцию (функцию удаления) и массив чисел.
// Функция удаления определяет, нужно ли удалять элемент массива (возвращает true) или оставить (возвращает false).

// Пример
// Для функции удаления, удаляющей все числа больше 5:

// Входной массив: [3, 6, 9, 2]
// Выходной массив: [3, 2] (числа 6 и 9 удалены, так как они больше 5)

// const arr = [3, 6, 9, 2];
// function cleanArr(){
// const resultArr = [];
//   return function ([...reluxedArr]) {
//     for (let i = 0; i < reluxedArr.length; i++) {
//       if(reluxedArr[i] > 5){ //если true
//         resultArr.push(arr[i]); //добавляем в новый массив
//       }//иначе false и значение исходного массива не добавляется в новый массив 
//     }
//     return resultArr;
//   }
// }
// const filterArray = cleanArr()(arr);
// console.log(filterArray);
// console.log(arr);

const arr = [-200, -22, -52, 10, 22, 35, 44, 15, 3, 7, 37, 69, 82, 55, 65, 72, 18, 4, 92];
function filterArray(array, fn) {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
      const isDelete = fn(array[i]); //  Вызываем функцию, результатом которой будет необходимость удалить число, где true - да, false - нет
      if (!isDelete) {
          //  Если оставить, то кладём в результирующий массив
          resultArray.push(array[i]);
      }
  }
  return resultArray;
}
/* Функция условия удаления 
    Условие: 
    Если число больше двух, но меньше 5
    или равно 7 
    или больше 50, но остаток от деления на 5 равен 0 (55, 60, 65 и т.п.)
    или остаток от деления на 4 равен 0 (4, 8, 16, 32, 64 и т.п.)
    или остаток от деления на 11 равен 2 (13, 24, 35 и т.п.)
*/
function canDelete(num) {
  return (num > 2 && num < 5) || num === 7 || (num > 50 && num % 5 === 0) || num % 4 === 0 || num % 11 === 2;
}

function canDelete2(num) {
  return num < 5;
}

function canDelete3(num) {
  return num > 5 || num < 0;
}

function canDelete4(num) {
  return (num > 33 && num < 66) || num < 0;
}

const result1 = filterArray(arr, canDelete);
const result2 = filterArray(arr, canDelete2);
const result3 = filterArray(arr, canDelete3);
const result4 = filterArray(arr, canDelete4);

console.log(result1);   //  [ -22, 10, 22, 15, 37, 69, 82, 18 ]
console.log(result2);   //  [ 10, 22, 35, 44, 15, 7, 37, 69, 82, 55, 65, 72, 18, 92 ]
console.log(result3);   //  [ 3, 4 ]
console.log(result4);   //  [ 10, 22, 15, 3, 7, 69, 82, 72, 18, 4, 92 ]