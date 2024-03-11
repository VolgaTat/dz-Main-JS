//Написать функцию, которая получает на вход строку с:
 //- суммой средств - 1000
 //- валютой средств - руб
 //- целевой валютой - $
 //Возвращает число в новой валюте, если конвертация поддерживается
 //или null - если нетю
 //Ставки конвертации хранятся внутри функции

// let sumFunds - сумма средств 
// let currencyValue - знак текущей валюты
// let currencyValueRyb - знак текущего рубля

// let targetValue - знак целевой валюты
// let targetValueRub - знак целевого рубля

 const convertValue = (sumFunds, currencyValue, currencyValueRyb, targetValueRub, targetValue) =>{
  let courseValue = 91.33;
  let courseValueEvr = 112.33;
  let courseValueCny = 12.63;
  if(!parseInt(sumFunds)){
    return null;
  } else {
    if (currencyValueRyb === "руб" &&  (targetValue === "$" || "€" || "¥" )) {
      if (targetValue === "$") return Math.ceil (sumFunds / courseValue) + targetValue;
      if (targetValue === "€" ) return Math.ceil (sumFunds / courseValueEvr) + targetValue;
      if (targetValue === "¥") return Math.ceil (sumFunds / courseValueCny) + targetValue;
    } 
    else if ((currencyValue === "$" || "€" || "¥") && targetValueRub === "руб" ) {
      if (currencyValue === "$") return Math.ceil (sumFunds * courseValue) + " " + targetValueRub;
      if (currencyValue === "€") return Math.ceil (sumFunds * courseValueEvr) + " " + targetValueRub;
      if (currencyValue === "¥") return Math.ceil (sumFunds * courseValueCny) + " " + targetValueRub;
    } 
    return null
  }
}

// Ручное тестирование
console.log(convertValue(1000, null, "руб", null, "$"));
console.log(convertValue(1000, null, "руб", null, "€"));
console.log(convertValue(1000, null, "руб", null, "¥"));

console.log(convertValue(10, "$", null,"руб", null));
console.log(convertValue(10, "€", null,"руб", null));
console.log(convertValue(10, "¥", null,"руб", null));

console.log(convertValue(1000, null, "руб", null, "$g"));
console.log(convertValue(1000, null, "руб", null, "€d"));
console.log(convertValue(1000, null, "руб", null, "¥g"));

console.log(convertValue("1000", null, "руб", null, "$")); // если строка цифровая
console.log(convertValue("hhfhf", null, "руб", null, "€"));
console.log(convertValue("", null, "руб", null, "¥"));
console.log(convertValue(0, null, "руб", null, "¥"));

console.log(convertValue(10, "$", null,"ert", null));
console.log(convertValue(10, "€", null,"erg", null));
console.log(convertValue(10, "¥", null,"lkj", null));

console.log(convertValue("vvv", "$", null,"руб", null));
console.log(convertValue(null, "€", null,"руб", null));
console.log(convertValue("", "¥", null,"руб", null));
