//Написать функцию, которая получает на вход строку с:
 //- суммой средств - 1000
 //- валютой средств - руб
 //- целевой валютой - $
 //Возвращает число в новой валюте, если конвертация поддерживается
 //или null - если нет
 //Ставки конвертации хранятся внутри функции

function converter(sum, targetCurrency, currency){
  let result;
  let courseUSDinRUB = 91.33;
  let courseUSDinEUR = 0.9;
  let courseRUBinEUR = 112.33;
  
  switch(currency){ 
    case 'USD':
      switch (targetCurrency) { 
          case 'RUB':
            result = Math.ceil(sum * courseUSDinRUB) + " руб";
            break;
          case 'EUR':
            result = Math.ceil(sum * courseUSDinEUR) + " €";
            break;
          default:
            return null;
      }
    break;
  }
  switch(currency){ 
    case 'RUB':
      switch (targetCurrency) { 
          case 'USD':
            result = Math.ceil(sum / courseUSDinRUB) + " $";
            break;
          case 'EUR':
            result = Math.ceil(sum / courseRUBinEUR) + " €";
            break;
          default:
            return null;
      }
    break;
  }
  switch(currency){ 
    case 'EUR':
      switch (targetCurrency) { 
          case 'RUB':
            result = Math.ceil(sum * courseRUBinEUR) + " руб";
            break;
          case 'USD':
            result = Math.ceil(sum * courseUSDinEUR) + " $";
            break;
          default:
            return null;
      }
    break;
  }
 return result;
}

console.log(converter(10, "RUB", "USD"));
console.log(converter(10, "EUR", "USD"));

console.log(converter(1500, "EUR", "RUB"));
console.log(converter(1500, "USD", "RUB"));

console.log(converter(10, "RUB", "EUR"));
console.log(converter(10, "USD", "EUR"));

console.log(converter(10, "RUB", "EURU"));
console.log(converter(10, "USD", "EUR"));

console.log(converter(10, "RUB", "EUR"));
console.log(converter(10, "USDTY", "EUR"));
