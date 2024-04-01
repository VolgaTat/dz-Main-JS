// Цель:
// Написать функцию для проверки корректности номера карты с использованием алгоритма Луна.
// Входные данные:
// Номер карты в виде строки (например, "4561-1213-4367-2612").

// Шаги Реализации:
// Подготовка номера карты:
// 1. Очистка строки от лишних символов (например, -), оставить только числа. +
// Валидация полученной строки на корректность +

// Применение алгоритма Луна:
// Работаем с отфильтрованной последовательностью чисел. +
// Для каждой цифры в нечетной позиции: умножаем на 2.+
// Цифры в четных позициях оставляем без изменений.+
// Если результат умножения больше 9, вычитаем из него 9.+
// Формируем новую последовательность чисел.+

// Проверка результата:
// Суммируем полученные числа.
// Проверяем, делится ли сумма на 10 без остатка (используем знак процента %).
// Если делится, карта корректна (возвращаем true), иначе - нет (возвращаем false).

// function valitedCard(accountNum) {
//   let cardInit = accountNum.replace(/\-/gi,"").split``.map(elem => !isNaN(elem) ? Number(elem) : accountNum = false)
//   for (let i = cardInit.length - 2; i >= 0 ; i = i - 2) { 
//     let multiCardInit = cardInit[i] * 2;
//     if(multiCardInit > 9) {
//       multiCardInit = multiCardInit - 9;
//     }
//     cardInit[i] = multiCardInit; 
//   }
//   //console.log(filterInitCard); [8, 5, 3, 1, 2, 2, 2, 3, 8, 3, 3, 7, 4, 6, 2, 2]
//   //Проверка результата    
//   let count = 0;
//   for (let k = 0; k < cardInit.length; k++) {
//     count += cardInit[k];
//   }
//   return count % 10 === 0;
// }
// console.log(valitedCard("4561-1213-4367-2612"));//false
// console.log(valitedCard("3476-8026-7927-037"));//true
// console.log(valitedCard("3d76-8026-7%27-037"));//false

function cardLunaValidate(card) {
  const cardNumber = card
      .replaceAll('-', '')
      .split('')
      .map((x) => Number(x));
  if (cardNumber.includes(NaN)) {
      return NaN;
  }
  const isEven = (cardNumber.length - 1) % 2 === 0;
  for (let i = Number(isEven); i < cardNumber.length; i = i + 2) {
      cardNumber[i] = cardNumber[i] * 2 > 9 ? cardNumber[i] * 2 - 9 : cardNumber[i] * 2;
  }
  const sum = cardNumber.reduce((total, el) => total + el);
  return sum % 10 === 0;
}
function resultTemplate(card) {
  const startString = `Карта с номером: ${card}`;
  const endString = `получила результат: ${cardLunaValidate(card)}`;
  return `${startString} ${endString}`;
}
const card = '234s834503458353';//NaN
const card1 = '2342834503458353';//true
const card2 = '4561-2612-1234-548';//true
const card3 = '4561-2612-1534-5464';//true

console.log(resultTemplate(card));
console.log(resultTemplate(card1));
console.log(resultTemplate(card2));
console.log(resultTemplate(card3));
