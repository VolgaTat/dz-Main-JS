//Написать код. который при передачи пользователем языка:
//en, ru, fr, de выводит в консоль сот-щее приветствие на указанном языке

const languageRequest = prompt("Enter your language?")
switch (languageRequest){
  case "en":
    console.log("Hello, user");
    break;
  case "ru":
    console.log("Здравствуйте, пользователь");
    break;
  case "fr":
    console.log("Bonjour, utilisateur");
    break;
  case "sp":
    console.log("Hola, usuario");
    break;
  default:
    console.log("Enter your language: English, Russian, France or Spain?");
}