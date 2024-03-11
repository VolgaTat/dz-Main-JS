// Написать 2 функции:
// - шифратор пароля - функция принимает пароль, 
// разбивая по символам, меняет местами какие-то буквы
// по заданному алгоритму и возвращает строку.

// - проверка пароля - принимает зашифрованный пароль и втрой пароль.
// Если зашифрованный пароль === паролю => true ? false

function encryptPassword(password){
  const smashPassword = password.split("");
  if(password.length <= 8 ){
    return false;
  } else {
    const removePartEnd = smashPassword.splice(4);
    const nemPassword = `${removePartEnd.join("")}${smashPassword.join("")}`;
    return nemPassword;
  }
}
function checkPassword(nemPassword,lastPassword) {
  if (nemPassword.length !== lastPassword.length) return false;
  if(!nemPassword) return false;
  nemPassword = nemPassword.split("").sort();
  lastPassword= lastPassword.split("").sort();
  return nemPassword.join("").includes(lastPassword.join("")) ? true : false;
}

console.log(checkPassword(encryptPassword("paswxxx5EEor"), "paswxxx5EEor"));
console.log(checkPassword(encryptPassword("paswxxxor"), "paswxxxor"));
console.log(checkPassword(encryptPassword("paRswxxx5EEor"), "parwxxx5EEor"));
console.log(checkPassword(encryptPassword("car"), "car"));
console.log(checkPassword(encryptPassword(""), ""));
