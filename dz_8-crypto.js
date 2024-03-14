// Написать 2 функции:
// - шифратор пароля - функция принимает пароль, 
// разбивая по символам, меняет местами какие-то буквы
// по заданному алгоритму и возвращает строку.

// - проверка пароля - принимает зашифрованный пароль и второй пароль.
// Если зашифрованный пароль === паролю => true ? false

const pass = "123qwerty123";
function encryptPassword(pass){
  const smashPassword = pass.split("");
  if(pass.length <= 8 ){
    return false;
  } else {
    const removePartEnd = smashPassword.splice(4);
    const nemPassword = `${removePartEnd.join("")}${smashPassword.join("")}`;
    return nemPassword;
  }
}
const cruptoPass = encryptPassword(pass);

// function checkPassword(nemPassword,lastPassword) {
//   if (nemPassword.length !== lastPassword.length) return false;
//   if(!nemPassword) return false;
//   nemPassword = nemPassword.split("").sort();
//   lastPassword= lastPassword.split("").sort();
//   return nemPassword.join("").includes(lastPassword.join("")) ? true : false;
// }
function checkPassword(cryptoString, password) {
  if(!password || !cryptoString) {
    return false;
  }
  return password === encryptPassword(cryptoString);
}

console.log(cruptoPass); // werty123123q меняем символы
console.log(checkPassword(pass, cruptoPass)); //true проверяем 

console.log(cruptoPass); 
console.log(checkPassword("132qwerty123", cruptoPass));//false 
