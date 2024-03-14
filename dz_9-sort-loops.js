// Массив чисел arr = [1, 40, -5, 10, 0]
// Написать функцию, которая сортирует данный массив при помощи циклов
// // (или по возрастанию, или по убыванию)
let count = 0;
const assortArray = (arr)=>{
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]){
        let tempVariable = arr[i];
        arr[i] = arr[j];
        arr[j] = tempVariable;
      }
      count++;
      console.log(`Итерации: i: ${i} - j: ${j}, общее кол-во: ${count}`)
    }
  }
return arr;
}
console.log(assortArray([1, 40, -5, -10, 0]));
// console.log(assortArray([21, 480, 45, -10, 0]));
// console.log(assortArray([-2, 0, -45, -10, -245]));

const assortArrayTime = (arr)=>{
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]){
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
      count++;
       console.log(`Итерации: i: ${i} - j: ${j}, общее кол-во: ${count}`)
    }
  }
return arr;
}
console.log(assortArrayTime([1, 40, -5, -10, 0]));
// console.log(assortArray([21, 480, 45, -10, 0]));
// console.log(assortArray([-2, 0, -45, -10, -245]));