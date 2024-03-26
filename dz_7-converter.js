//Написать функцию, которая получает на вход строку с:
 //- суммой средств - 1000
 //- валютой средств - руб
 //- целевой валютой - $
 //Возвращает число в новой валюте, если конвертация поддерживается
 //или null - если нет
 //Ставки конвертации хранятся внутри функции

 function convertSum(sum, from, to) {
  return ((sum * from) / to).toFixed(2);
}

function converter(sum, currency, targetCurrency) {
  const USD = 91.33;
  const RUB = 1;
  const EUR = 112.33;

  switch (currency) {
      case 'USD':
          switch (targetCurrency) {
              case 'RUB':
                  return convertSum(sum, USD, RUB) + ' руб';
              case 'EUR':
                  return convertSum(sum, USD, EUR) + ' €';
              default: {
                  console.log('Исходящая валюта мне неизвестна');
                  return null;
              }
          }
      case 'RUB':
          switch (targetCurrency) {
              case 'USD':
                  return convertSum(sum, RUB, USD) + ' $';
              case 'EUR':
                  return convertSum(sum, RUB, EUR) + ' €';
              default: {
                  console.log('Исходящая валюта мне неизвестна');
                  return null;
              }
          }
      case 'EUR':
          switch (targetCurrency) {
              case 'RUB':
                  return convertSum(sum, EUR, RUB) + ' руб';
              case 'USD':
                  return convertSum(sum, EUR, USD) + ' $';
              default: {
                  console.log('Исходящая валюта мне неизвестна');
                  return null;
              }
          }
      default: {
        console.log('Входящая валюта мне неизвестна');
        return null;
    }
  }
}
console.log(converter(100, 'RUB', 'USD'));      // 1.09 $
console.log(converter(100, 'RUB', 'EUR'));      // 0.89 €
console.log(converter(1000, 'EUR', 'USD'));     // 1229.94 $
console.log(converter(1000, 'USD', 'EUR'));     // 813.05 €
console.log(converter(1000, 'EUR', 'RUB'));     // 112330.00 руб