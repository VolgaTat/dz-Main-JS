// Реализовать функцию, выполняющую обратную операцию фильтрации массива чисел.

// Функция принимает в качестве аргументов другую функцию (функцию удаления) и массив чисел.
// Функция удаления определяет, нужно ли удалять элемент массива (возвращает true) или оставить (возвращает false).

// Пример
// Для функции удаления, удаляющей все числа больше 5:

// Входной массив: [3, 6, 9, 2]
// Выходной массив: [3, 2] (числа 6 и 9 удалены, так как они больше 5)

const arr = [3, 6, 9, 2];
function cleanArr(){
const resultArr = [];
  return function ([...reluxedArr]) {
    for (let i = 0; i < reluxedArr.length; i++) {
      if(reluxedArr[i] > 5){ //если true
        resultArr.push(arr[i]); //добавляем в новый массив
      }//иначе false и значение исходного массива не добавляется в новый массив 
    }
    return resultArr;
  }
}
const filterArray = cleanArr()(arr);
console.log(filterArray);
console.log(arr);