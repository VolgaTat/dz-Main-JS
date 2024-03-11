// Массив чисел arr = [1, 40, -5, 10, 0]
// Написать функцию, которая сортирует данный массив при помощи циклов
// (или по возрастанию, или по убыванию)
const arr = [1, 40, -5, -10, 0]
const arr1 = [-12, 44, -6, 99, 0]
const arr2 = [-6,-1,-4,-7,-8]
const arr3 = []

const assortArray = (arrNew)=>{
  // 1. Пробегаем по массиву циклом i
  for (let i = 0; i < arrNew.length; i++) {
    //2. Запускаем внутренний цикл j
    for (let j = 0; j < arrNew.length - i; j++) {
      if (arrNew[j] > arrNew[j + 1] ){
        //Меняем согласно условию 
       [arrNew[j], arrNew[j + 1]] = [arrNew[j + 1], arrNew[j]]
      }
    }
  }
  return arrNew;
}

console.log(assortArray(arr));
console.log(assortArray(arr1));
console.log(assortArray(arr2));
console.log(assortArray(arr3));
